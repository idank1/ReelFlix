import { Router } from 'express';
import { railsController } from '../controllers/railsController';

const router = Router();

/**
 * GET /api/rails
 * Get all rails to display on the home screen
 * Returns Continue Watching, Trending Now, and series-based rails
 */
router.get('/', (req, res) => railsController.getAll(req, res));

export default router;

