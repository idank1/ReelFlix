import { Series, Season, Episode } from '../types';
import { videoStorage } from './videoStorage';
import { initialSeries } from './initialData/series';
import { initialSeasons } from './initialData/seasons';
import { initialEpisodes } from './initialData/episodes';

/**
 * In-Memory JSON Database
 * 
 * For MVP, we use an in-memory data structure.
 * In production, this would be replaced with a proper database.
 * All methods are async to simulate real database operations.
 */
class Database {
  private series: Map<string, Series> = new Map();
  private seasons: Map<number, Season> = new Map();
  private episodes: Map<number, Episode> = new Map();

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    // Load initial data
    initialSeries.forEach(series => this.series.set(series.id, series));
    initialSeasons.forEach(season => this.seasons.set(season.id, season));
    initialEpisodes.forEach(episode => {
      // Resolve video URL through storage service
      const resolvedEpisode = {
        ...episode,
        videoUrl: videoStorage.getVideoUrl(episode.videoUrl)
      };
      this.episodes.set(episode.id, resolvedEpisode);
    });
  }

  // Series methods
  async getAllSeries(): Promise<Series[]> {
    return Promise.resolve(Array.from(this.series.values()));
  }

  // Season methods
  async getAllSeasons(): Promise<Season[]> {
    return Promise.resolve(Array.from(this.seasons.values()));
  }

  async getSeasonById(id: number): Promise<Season | undefined> {
    return Promise.resolve(this.seasons.get(id));
  }

  async getSeasonsBySeriesId(seriesId: string): Promise<Season[]> {
    return Promise.resolve(
      Array.from(this.seasons.values()).filter(s => s.seriesId === seriesId)
    );
  }

  // Episode methods
  async getAllEpisodes(): Promise<Episode[]> {
    return Promise.resolve(Array.from(this.episodes.values()));
  }

  async getEpisodeById(id: number): Promise<Episode | undefined> {
    return Promise.resolve(this.episodes.get(id));
  }

  async getEpisodesBySeasonId(seasonId: number): Promise<Episode[]> {
    return Promise.resolve(
      Array.from(this.episodes.values()).filter(e => e.seasonId === seasonId)
    );
  }

  async updateEpisode(id: number, updates: Partial<Episode>): Promise<Episode | undefined> {
    const episode = this.episodes.get(id);
    if (!episode) {
      return Promise.resolve(undefined);
    }

    const updated = { ...episode, ...updates };
    this.episodes.set(id, updated);
    return Promise.resolve(updated);
  }

  async markEpisodeAsWatched(id: number): Promise<Episode | undefined> {
    return this.updateEpisode(id, { watched: true });
  }

  async markEpisodeAsUnwatched(id: number): Promise<Episode | undefined> {
    return this.updateEpisode(id, { watched: false });
  }
}

// Singleton instance
export const db = new Database();
