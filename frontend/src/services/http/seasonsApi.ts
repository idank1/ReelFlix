import { Season, ApiResponse } from '../../types';
import { httpClient } from './client';

/**
 * Seasons API service
 */
class SeasonsApi {
  /**
   * Get all seasons
   */
  async getSeasons(): Promise<ApiResponse<Season[]>> {
    return httpClient.get<Season[]>('/seasons');
  }

  /**
   * Get a single season by ID
   */
  async getSeasonById(id: number): Promise<ApiResponse<Season>> {
    return httpClient.get<Season>(`/seasons/${id}`);
  }

  /**
   * Get seasons by series ID
   */
  async getSeasonsBySeriesId(seriesId: string): Promise<ApiResponse<Season[]>> {
    return httpClient.get<Season[]>(`/seasons/series/${seriesId}`);
  }
}

export const seasonsApi = new SeasonsApi();

