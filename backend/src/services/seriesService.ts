import { Series } from '../types';
import { seriesDal } from '../dal/seriesDal';

/**
 * Series Service
 * Business logic for series
 */
export class SeriesService {
  /**
   * Get all series
   */
  async getAll(): Promise<Series[]> {
    return seriesDal.getAll();
  }

  /**
   * Get series by ID
   */
  async getById(id: string): Promise<Series | undefined> {
    return seriesDal.getById(id);
  }
}

export const seriesService = new SeriesService();

