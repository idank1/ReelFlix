import { Request, Response } from 'express';
import { seriesService } from '../services/seriesService';

/**
 * Series Controller
 * Handles HTTP requests/responses for series
 */
export class SeriesController {
  /**
   * Get all series
   */
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const series = await seriesService.getAll();
      res.json({
        success: true,
        data: series,
        count: series.length
      });
    } catch (error) {
      console.error('Error fetching series:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch series'
      });
    }
  }

  /**
   * Get a single series by ID
   */
  async getById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const series = await seriesService.getById(id);

      if (!series) {
        res.status(404).json({
          success: false,
          error: 'Series not found'
        });
        return;
      }

      res.json({
        success: true,
        data: series
      });
    } catch (error) {
      console.error('Error fetching series:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch series'
      });
    }
  }
}

export const seriesController = new SeriesController();

