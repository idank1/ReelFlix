export interface Series {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
}

export interface Season {
  id: number;
  seriesId: string;
  seasonNumber: number;
  name: string;
  createdAt: string;
}

export interface Episode {
  id: number;
  seasonId: number;
  title: string;
  description?: string;
  episodeNumber: number;
  videoUrl: string;
  thumbnailUrl?: string;
  duration?: number; // in seconds
  watched: boolean;
  createdAt: string;
}

// Enriched episode with season and series information
export interface EnrichedEpisode extends Episode {
  season?: {
    id: number;
    name: string;
    seasonNumber: number;
  };
  series?: {
    id: string;
    name: string;
  };
}

export enum SortOption {
  TITLE = 'title',
  EPISODE_NUMBER = 'episodeNumber',
  CREATED_AT = 'createdAt',
  SERIES_NAME = 'seriesName',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

// Valid sort options as array for validation
export const VALID_SORT_OPTIONS: SortOption[] = [
  SortOption.TITLE,
  SortOption.EPISODE_NUMBER,
  SortOption.CREATED_AT,
  SortOption.SERIES_NAME,
];

export interface EpisodeFilters {
  watched?: boolean;
  seriesId?: string;
  seasonId?: number;
}

export interface EpisodeQueryParams {
  sortBy?: string; // Will be validated against SortOption enum in controller
  sortOrder?: string; // Will be validated against SortOrder enum in controller
  watched?: string; // 'true' or 'false'
  seriesId?: string;
  seasonId?: string; // Will be parsed to number in controller
}

// Rail represents a horizontal row of episodes (like Netflix rows)
export interface Rail {
  id: string;
  title: string;
  subtitle?: string;
  episodes: EnrichedEpisode[];
}

