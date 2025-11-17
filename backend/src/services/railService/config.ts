/**
 * Rail Configuration
 * Defines which rails to show and in what order
 */

export enum RailType {
  CONTINUE_WATCHING = 'continue-watching',
  TRENDING_NOW = 'trending-now',
  SERIES = 'series',
}

export interface RailConfig {
  type: RailType;
  enabled: boolean;
  order: number; // Lower number = appears first
  title?: string; // Optional custom title override
  subtitle?: string; // Optional custom subtitle
  limit?: number; // Optional limit on number of episodes
}

/**
 * Rail configuration - defines which rails to show and their order
 * To add/remove/reorder rails, simply modify this array
 */
export const RAIL_CONFIG: RailConfig[] = [
  {
    type: RailType.CONTINUE_WATCHING,
    enabled: true,
    order: 1,
    title: 'Continue Watching',
    subtitle: 'Pick up where you left off',
    limit: 10,
  },
  {
    type: RailType.TRENDING_NOW,
    enabled: true,
    order: 2,
    title: 'Trending Now',
    subtitle: 'Popular picks for you',
    limit: 15,
  },
  {
    type: RailType.SERIES,
    enabled: true,
    order: 3,
    // Series rails will use the series name as title
  },
];

