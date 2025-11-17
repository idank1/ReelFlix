import { Router } from 'express';
import { seriesController } from '../controllers/seriesController';

const router = Router();

/**
 * GET /api/series
 * Get all series
 */
router.get('/', (req, res) => seriesController.getAll(req, res));

/**
 * GET /api/series/:id
 * Get a single series by ID
 */
router.get('/:id', (req, res) => seriesController.getById(req, res));

export default router;

