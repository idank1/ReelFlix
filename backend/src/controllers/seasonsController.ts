import { Request, Response } from 'express';
import { seasonsService } from '../services/seasonsService';

/**
 * Seasons Controller
 * Handles HTTP requests/responses for seasons
 */
export class SeasonsController {
  /**
   * Get all seasons
   */
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const seasons = await seasonsService.getAll();
      res.json({
        success: true,
        data: seasons,
        count: seasons.length
      });
    } catch (error) {
      console.error('Error fetching seasons:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch seasons'
      });
    }
  }

  /**
   * Get a single season by ID
   */
  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const seasonId = parseInt(id, 10);
      if (isNaN(seasonId)) {
        res.status(400).json({
          success: false,
          error: 'Invalid season ID'
        });
        return;
      }
      const season = await seasonsService.getById(seasonId);

      if (!season) {
        res.status(404).json({
          success: false,
          error: 'Season not found'
        });
        return;
      }

      res.json({
        success: true,
        data: season
      });
    } catch (error) {
      console.error('Error fetching season:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch season'
      });
    }
  }

  /**
   * Get all seasons for a specific series
   */
  async getBySeriesId(req: Request, res: Response): Promise<void> {
    try {
      const { seriesId } = req.params;
      const seasons = await seasonsService.getBySeriesId(seriesId);
      
      res.json({
        success: true,
        data: seasons,
        count: seasons.length
      });
    } catch (error) {
      console.error('Error fetching seasons for series:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch seasons'
      });
    }
  }
}

export const seasonsController = new SeasonsController();

