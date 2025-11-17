import { Episode, SortOption, SortOrder, ApiResponse } from '../../types';
import { httpClient } from './client';

export interface EpisodeFilters {
  watched?: boolean;
  seriesId?: string;
  seasonId?: number;
}

export { EpisodeFilters };

/**
 * Episodes API service
 */
class EpisodesApi {
  /**
   * Get all episodes with optional filtering and sorting
   */
  async getEpisodes(
    filters?: EpisodeFilters,
    sortBy?: SortOption,
    sortOrder?: SortOrder
  ): Promise<ApiResponse<Episode[]>> {
    const params = new URLSearchParams();
    
    if (filters?.watched !== undefined) {
      params.append('watched', filters.watched.toString());
    }
    if (filters?.seriesId) {
      params.append('seriesId', filters.seriesId);
    }
    if (filters?.seasonId !== undefined) {
      params.append('seasonId', filters.seasonId.toString());
    }
    if (sortBy) {
      params.append('sortBy', sortBy);
    }
    if (sortOrder) {
      params.append('sortOrder', sortOrder);
    }

    const queryString = params.toString();
    const endpoint = `/episodes${queryString ? `?${queryString}` : ''}`;
    
    return httpClient.get<Episode[]>(endpoint);
  }

  /**
   * Get a single episode by ID
   */
  async getEpisodeById(id: number): Promise<ApiResponse<Episode>> {
    return httpClient.get<Episode>(`/episodes/${id}`);
  }

  /**
   * Mark an episode as watched
   */
  async markAsWatched(id: number): Promise<ApiResponse<Episode>> {
    return httpClient.patch<Episode>(`/episodes/${id}/watched`);
  }

  /**
   * Mark an episode as unwatched
   */
  async markAsUnwatched(id: number): Promise<ApiResponse<Episode>> {
    return httpClient.patch<Episode>(`/episodes/${id}/unwatched`);
  }
}

export const episodesApi = new EpisodesApi();

