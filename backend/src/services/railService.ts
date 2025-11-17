import { episodeService } from './episodeService';
import { seasonsDal } from '../dal/seasonsDal';
import { seriesDal } from '../dal/seriesDal';
import { Rail, EnrichedEpisode, SortOption, SortOrder, Season, Series } from '../types';
import { RAIL_CONFIG, RailType } from './railService/config';
import {
  generateContinueWatchingRail,
  generateTrendingNowRail,
  generateSeriesRails,
  RailGeneratorContext,
} from './railService/railGenerators';

/**
 * Service for generating rails (horizontal rows of episodes)
 * Rails are configured via RAIL_CONFIG and generated based on that configuration
 */
class RailService {
  /**
   * Get all rails to display on the home screen
   * Rails are generated based on RAIL_CONFIG configuration
   */
  async getRails(): Promise<Rail[]> {
    // Get all episodes enriched with season and series info
    const allEpisodes = await this.getAllEnrichedEpisodes();
    const context: RailGeneratorContext = { allEpisodes };

    // Get enabled rails sorted by order
    const enabledConfigs = RAIL_CONFIG
      .filter(config => config.enabled)
      .sort((a, b) => a.order - b.order);

    const rails: Rail[] = [];

    // Generate rails based on configuration
    for (const config of enabledConfigs) {
      switch (config.type) {
        case RailType.CONTINUE_WATCHING: {
          const rail = generateContinueWatchingRail(context, {
            limit: config.limit,
            title: config.title,
            subtitle: config.subtitle,
          });
          rails.push(rail);
          break;
        }

        case RailType.TRENDING_NOW: {
          const rail = generateTrendingNowRail(context, {
            limit: config.limit,
            title: config.title,
            subtitle: config.subtitle,
          });
          rails.push(rail);
          break;
        }

        case RailType.SERIES: {
          const seriesRails = generateSeriesRails(context);
          rails.push(...seriesRails);
          break;
        }

        default:
          // Unknown rail type - skip
          break;
      }
    }

    return rails;
  }

  /**
   * Get all episodes enriched with season and series information
   */
  private async getAllEnrichedEpisodes(): Promise<EnrichedEpisode[]> {
    const episodes = await episodeService.getEpisodes({}, SortOption.EPISODE_NUMBER, SortOrder.ASC);
    
    // Create a map of seasonId -> season for efficient lookup
    const seasonMap = new Map<number, Season>();
    const seasonIds = new Set(episodes.map(e => e.seasonId));
    
    for (const seasonId of seasonIds) {
      const season = await seasonsDal.getById(seasonId);
      if (season) {
        seasonMap.set(seasonId, season);
      }
    }

    // Create a map of seriesId -> series for efficient lookup
    const seriesMap = new Map<string, Series>();
    const seriesIds = new Set(Array.from(seasonMap.values()).map(s => s.seriesId));
    
    for (const seriesId of seriesIds) {
      const series = await seriesDal.getById(seriesId);
      if (series) {
        seriesMap.set(seriesId, series);
      }
    }
    
    return episodes.map(episode => {
      const season = seasonMap.get(episode.seasonId);
      const series = season ? seriesMap.get(season.seriesId) : null;
      
      return {
        ...episode,
        season: season ? {
          id: season.id,
          name: season.name,
          seasonNumber: season.seasonNumber,
        } : undefined,
        series: series ? {
          id: series.id,
          name: series.name,
        } : undefined,
      };
    });
  }
}

export const railService = new RailService();

