import { Router } from 'express';
import { seasonsController } from '../controllers/seasonsController';

const router = Router();

/**
 * GET /api/seasons
 * Get all seasons
 */
router.get('/', (req, res) => seasonsController.getAll(req, res));

/**
 * GET /api/seasons/series/:seriesId
 * Get all seasons for a specific series
 */
router.get('/series/:seriesId', (req, res) => seasonsController.getBySeriesId(req, res));

/**
 * GET /api/seasons/:id
 * Get a single season by ID
 */
router.get('/:id', (req, res) => seasonsController.getById(req, res));

export default router;

