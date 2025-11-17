import { Episode } from '../types';
import { db } from '../storage/database';

/**
 * Data Access Layer for Episodes
 * Handles all database operations for episodes
 */
export class EpisodesDal {
  /**
   * Get all episodes
   */
  async getAll(): Promise<Episode[]> {
    return db.getAllEpisodes();
  }

  /**
   * Get episode by ID
   */
  async getById(id: number): Promise<Episode | undefined> {
    return db.getEpisodeById(id);
  }

  /**
   * Get episodes by season ID
   */
  async getBySeasonId(seasonId: number): Promise<Episode[]> {
    return db.getEpisodesBySeasonId(seasonId);
  }

  /**
   * Get episodes by series ID (through seasons)
   */
  async getBySeriesId(seriesId: string): Promise<Episode[]> {
    const seasons = await db.getSeasonsBySeriesId(seriesId);
    const seasonIds = seasons.map(season => season.id);
    const episodes = await db.getAllEpisodes();
    return episodes.filter(episode => seasonIds.includes(episode.seasonId));
  }

  /**
   * Get episodes by watched status
   */
  async getByWatchedStatus(watched: boolean): Promise<Episode[]> {
    const episodes = await db.getAllEpisodes();
    return episodes.filter(episode => episode.watched === watched);
  }

  /**
   * Mark episode as watched
   */
  async markAsWatched(id: number): Promise<Episode | undefined> {
    return db.markEpisodeAsWatched(id);
  }

  /**
   * Mark episode as unwatched
   */
  async markAsUnwatched(id: number): Promise<Episode | undefined> {
    return db.markEpisodeAsUnwatched(id);
  }
}

export const episodesDal = new EpisodesDal();

