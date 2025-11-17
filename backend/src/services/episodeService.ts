import { Episode, EpisodeFilters, SortOption, SortOrder } from '../types';
import { episodesDal } from '../dal/episodesDal';
import { seasonsDal } from '../dal/seasonsDal';
import { seriesDal } from '../dal/seriesDal';

/**
 * Episode Service
 * Business logic for episodes
 */
export class EpisodeService {
  /**
   * Get all episodes with optional filtering and sorting
   */
  async getEpisodes(
    filters?: EpisodeFilters,
    sortBy: SortOption = SortOption.EPISODE_NUMBER,
    sortOrder: SortOrder = SortOrder.ASC
  ): Promise<Episode[]> {
    let episodes = await episodesDal.getAll();

    // Apply filters
    if (filters) {
      if (filters.watched !== undefined) {
        episodes = episodes.filter(e => e.watched === filters.watched);
      }
      if (filters.seriesId) {
        episodes = await episodesDal.getBySeriesId(filters.seriesId);
      }
      if (filters.seasonId) {
        episodes = await episodesDal.getBySeasonId(filters.seasonId);
      }
    }

    // Apply sorting
    episodes = await this.sortEpisodes(episodes, sortBy, sortOrder);

    return episodes;
  }

  /**
   * Get a single episode by ID
   */
  async getEpisodeById(id: number): Promise<Episode | undefined> {
    return episodesDal.getById(id);
  }

  /**
   * Mark an episode as watched
   */
  async markAsWatched(id: number): Promise<Episode | undefined> {
    return episodesDal.markAsWatched(id);
  }

  /**
   * Mark an episode as unwatched
   */
  async markAsUnwatched(id: number): Promise<Episode | undefined> {
    return episodesDal.markAsUnwatched(id);
  }

  /**
   * Sort episodes by the specified field and order
   */
  private async sortEpisodes(
    episodes: Episode[],
    sortBy: SortOption,
    sortOrder: SortOrder
  ): Promise<Episode[]> {
    const sorted = [...episodes];

    // If sorting by series name, we need to fetch season and series data
    if (sortBy === SortOption.SERIES_NAME) {
      // Create a map of seasonId -> series name for efficient lookup
      const seriesNameMap = new Map<number, string>();
      const seasonIds = new Set(episodes.map(e => e.seasonId));
      
      for (const seasonId of seasonIds) {
        const season = await seasonsDal.getById(seasonId);
        if (season) {
          const series = await seriesDal.getById(season.seriesId);
          if (series) {
            seriesNameMap.set(seasonId, series.name);
          }
        }
      }

      sorted.sort((a, b) => {
        const nameA = seriesNameMap.get(a.seasonId) || '';
        const nameB = seriesNameMap.get(b.seasonId) || '';
        const comparison = nameA.localeCompare(nameB);
        return sortOrder === SortOrder.ASC ? comparison : -comparison;
      });
    } else {
      sorted.sort((a, b) => {
        let comparison = 0;

        switch (sortBy) {
          case SortOption.TITLE:
            comparison = a.title.localeCompare(b.title);
            break;
          case SortOption.EPISODE_NUMBER:
            comparison = a.episodeNumber - b.episodeNumber;
            break;
          case SortOption.CREATED_AT:
            comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            break;
          default:
            comparison = 0;
        }

        return sortOrder === SortOrder.ASC ? comparison : -comparison;
      });
    }

    return sorted;
  }
}

export const episodeService = new EpisodeService();

