import { Season } from '../types';
import { seasonsDal } from '../dal/seasonsDal';

/**
 * Seasons Service
 * Business logic for seasons
 */
export class SeasonsService {
  /**
   * Get all seasons
   */
  async getAll(): Promise<Season[]> {
    return seasonsDal.getAll();
  }

  /**
   * Get season by ID
   */
  async getById(id: number): Promise<Season | undefined> {
    return seasonsDal.getById(id);
  }

  /**
   * Get seasons by series ID
   */
  async getBySeriesId(seriesId: string): Promise<Season[]> {
    return seasonsDal.getBySeriesId(seriesId);
  }
}

export const seasonsService = new SeasonsService();

