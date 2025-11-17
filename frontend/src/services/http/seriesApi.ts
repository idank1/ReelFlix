import { Series, ApiResponse } from '../../types';
import { httpClient } from './client';

/**
 * Series API service
 */
class SeriesApi {
  /**
   * Get all series
   */
  async getSeries(): Promise<ApiResponse<Series[]>> {
    return httpClient.get<Series[]>('/series');
  }

  /**
   * Get a single series by ID
   */
  async getSeriesById(id: string): Promise<ApiResponse<Series>> {
    return httpClient.get<Series>(`/series/${id}`);
  }
}

export const seriesApi = new SeriesApi();

