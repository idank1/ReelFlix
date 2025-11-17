import { Request, Response } from 'express';
import { railService } from '../services/railService';

/**
 * Rails Controller
 * Handles HTTP requests/responses for rails
 */
export class RailsController {
  /**
   * Get all rails to display on the home screen
   */
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const rails = await railService.getRails();
      
      res.json({
        success: true,
        data: rails,
        count: rails.length,
      });
    } catch (error) {
      console.error('Error fetching rails:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch rails',
      });
    }
  }
}

export const railsController = new RailsController();

