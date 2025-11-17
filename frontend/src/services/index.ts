/**
 * Service layer exports
 * All data fetching should be done through React Query hooks
 */

// React Query hooks
export * from './railsService';
export * from './episodesService';
export * from './seasonsService';
export * from './seriesService';

// HTTP API clients (for use in React Query hooks only)
export * from './http/episodesApi';
export * from './http/seasonsApi';
export * from './http/seriesApi';
export * from './http/railsApi';

