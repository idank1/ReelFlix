import { Season } from '../types';
import { db } from '../storage/database';

/**
 * Data Access Layer for Seasons
 * Handles all database operations for seasons
 */
export class SeasonsDal {
  /**
   * Get all seasons
   */
  async getAll(): Promise<Season[]> {
    return db.getAllSeasons();
  }

  /**
   * Get season by ID
   */
  async getById(id: number): Promise<Season | undefined> {
    return db.getSeasonById(id);
  }

  /**
   * Get seasons by series ID
   */
  async getBySeriesId(seriesId: string): Promise<Season[]> {
    return db.getSeasonsBySeriesId(seriesId);
  }
}

export const seasonsDal = new SeasonsDal();

