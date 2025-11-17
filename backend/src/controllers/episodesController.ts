import { Request, Response } from 'express';
import { episodeService } from '../services/episodeService';
import { seasonsDal } from '../dal/seasonsDal';
import { seriesDal } from '../dal/seriesDal';
import { EpisodeFilters, EpisodeQueryParams, SortOption, SortOrder, EnrichedEpisode, VALID_SORT_OPTIONS } from '../types';

/**
 * Episodes Controller
 * Handles HTTP requests/responses for episodes
 */
export class EpisodesController {
  /**
   * Get all episodes with optional filtering and sorting
   */
  async getAll(req: Request<{}, {}, {}, EpisodeQueryParams>, res: Response): Promise<void> {
    try {
      const { watched, seriesId, seasonId, sortBy, sortOrder } = req.query;

      // Build filters
      const filters: EpisodeFilters = {};
      if (watched !== undefined) {
        filters.watched = watched === 'true';
      }
      if (seriesId) {
        filters.seriesId = seriesId;
      }
      if (seasonId) {
        const parsedSeasonId = parseInt(seasonId, 10);
        if (!isNaN(parsedSeasonId)) {
          filters.seasonId = parsedSeasonId;
        }
      }

      // Parse and validate sort parameters
      const sortByParam: SortOption = (sortBy && VALID_SORT_OPTIONS.includes(sortBy as SortOption))
        ? (sortBy as SortOption)
        : SortOption.EPISODE_NUMBER;

      const sortOrderParam: SortOrder = (sortOrder === SortOrder.DESC) ? SortOrder.DESC : SortOrder.ASC;

      // Get episodes from service
      const episodes = await episodeService.getEpisodes(filters, sortByParam, sortOrderParam);

      // Enrich episodes with season and series information
      const enrichedEpisodes: EnrichedEpisode[] = await this.enrichEpisodes(episodes);

      res.json({
        success: true,
        data: enrichedEpisodes,
        count: enrichedEpisodes.length
      });
    } catch (error) {
      console.error('Error fetching episodes:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch episodes'
      });
    }
  }

  /**
   * Get a single episode by ID
   */
  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const episodeId = parseInt(id, 10);
      if (isNaN(episodeId)) {
        res.status(400).json({
          success: false,
          error: 'Invalid episode ID'
        });
        return;
      }
      const episode = await episodeService.getEpisodeById(episodeId);

      if (!episode) {
        res.status(404).json({
          success: false,
          error: 'Episode not found'
        });
        return;
      }

      // Enrich episode with season and series information
      const enrichedEpisode = await this.enrichEpisode(episode);

      res.json({
        success: true,
        data: enrichedEpisode
      });
    } catch (error) {
      console.error('Error fetching episode:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch episode'
      });
    }
  }

  /**
   * Mark an episode as watched
   */
  async markAsWatched(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const episodeId = parseInt(id, 10);
      if (isNaN(episodeId)) {
        res.status(400).json({
          success: false,
          error: 'Invalid episode ID'
        });
        return;
      }
      const episode = await episodeService.markAsWatched(episodeId);

      if (!episode) {
        res.status(404).json({
          success: false,
          error: 'Episode not found'
        });
        return;
      }

      res.json({
        success: true,
        data: episode
      });
    } catch (error) {
      console.error('Error marking episode as watched:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to update episode'
      });
    }
  }

  /**
   * Mark an episode as unwatched
   */
  async markAsUnwatched(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const episodeId = parseInt(id, 10);
      if (isNaN(episodeId)) {
        res.status(400).json({
          success: false,
          error: 'Invalid episode ID'
        });
        return;
      }
      const episode = await episodeService.markAsUnwatched(episodeId);

      if (!episode) {
        res.status(404).json({
          success: false,
          error: 'Episode not found'
        });
        return;
      }

      res.json({
        success: true,
        data: episode
      });
    } catch (error) {
      console.error('Error marking episode as unwatched:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to update episode'
      });
    }
  }

  /**
   * Enrich a single episode with season and series information
   */
  private async enrichEpisode(episode: { seasonId: number }): Promise<EnrichedEpisode> {
    const season = await seasonsDal.getById(episode.seasonId);
    const series = season ? await seriesDal.getById(season.seriesId) : null;
    
    return {
      ...episode,
      season: season ? {
        id: season.id,
        name: season.name,
        seasonNumber: season.seasonNumber
      } : undefined,
      series: series ? {
        id: series.id,
        name: series.name
      } : undefined
    } as EnrichedEpisode;
  }

  /**
   * Enrich multiple episodes with season and series information
   */
  private async enrichEpisodes(episodes: Array<{ seasonId: number }>): Promise<EnrichedEpisode[]> {
    // Create maps for efficient lookup
    const seasonMap = new Map<number, any>();
    const seriesMap = new Map<string, any>();
    const seasonIds = new Set(episodes.map(e => e.seasonId));
    
    // Fetch all seasons
    for (const seasonId of seasonIds) {
      const season = await seasonsDal.getById(seasonId);
      if (season) {
        seasonMap.set(seasonId, season);
        if (!seriesMap.has(season.seriesId)) {
          const series = await seriesDal.getById(season.seriesId);
          if (series) {
            seriesMap.set(season.seriesId, series);
          }
        }
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
          seasonNumber: season.seasonNumber
        } : undefined,
        series: series ? {
          id: series.id,
          name: series.name
        } : undefined
      } as EnrichedEpisode;
    });
  }
}

export const episodesController = new EpisodesController();

