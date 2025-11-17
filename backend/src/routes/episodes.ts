import { Router } from 'express';
import { episodesController } from '../controllers/episodesController';

const router = Router();

/**
 * GET /api/episodes
 * Get all episodes with optional filtering and sorting
 * 
 * Query parameters:
 * - watched: 'true' or 'false' to filter by watched status
 * - seriesId: Filter by series ID
 * - seasonId: Filter by season ID
 * - sortBy: 'title' | 'episodeNumber' | 'createdAt' | 'seriesName'
 * - sortOrder: 'asc' | 'desc'
 */
router.get('/', (req, res) => episodesController.getAll(req, res));

/**
 * GET /api/episodes/:id
 * Get a single episode by ID
 */
router.get('/:id', (req, res) => episodesController.getById(req, res));

/**
 * PATCH /api/episodes/:id/watched
 * Mark an episode as watched
 */
router.patch('/:id/watched', (req, res) => episodesController.markAsWatched(req, res));

/**
 * PATCH /api/episodes/:id/unwatched
 * Mark an episode as unwatched
 */
router.patch('/:id/unwatched', (req, res) => episodesController.markAsUnwatched(req, res));

export default router;

