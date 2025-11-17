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
  duration?: number;
  watched: boolean;
  createdAt: string;
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

export type SortOption = 'title' | 'episodeNumber' | 'createdAt' | 'seriesName';
export type SortOrder = 'asc' | 'desc';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  error?: string;
}

// Rail represents a horizontal row of episodes (like Netflix rows)
export interface Rail {
  id: string;
  title: string;
  subtitle?: string;
  episodes: Episode[];
}

