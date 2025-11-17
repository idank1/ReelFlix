import { Series } from '../types';
import { db } from '../storage/database';

/**
 * Data Access Layer for Series
 * Handles all database operations for series
 */
export class SeriesDal {
  /**
   * Get all series
   */
  async getAll(): Promise<Series[]> {
    return db.getAllSeries();
  }

  /**
   * Get series by ID
   */
  async getById(id: string): Promise<Series | undefined> {
    const series = await db.getAllSeries();
    return series.find(s => s.id === id);
  }
}

export const seriesDal = new SeriesDal();

