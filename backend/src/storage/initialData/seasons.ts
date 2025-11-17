import { Season } from '../../types';

/**
 * Initial seasons data
 * Season IDs: 1-15 (sequential)
 */
export const initialSeasons: Season[] = [
  // Stranger Things - 4 seasons (IDs: 1-4)
  {
    id: 1,
    seriesId: 'series-1',
    seasonNumber: 1,
    name: 'Season 1',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    seriesId: 'series-1',
    seasonNumber: 2,
    name: 'Season 2',
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    seriesId: 'series-1',
    seasonNumber: 3,
    name: 'Season 3',
    createdAt: new Date().toISOString()
  },
  {
    id: 4,
    seriesId: 'series-1',
    seasonNumber: 4,
    name: 'Season 4',
    createdAt: new Date().toISOString()
  },
  // Breaking Bad - 5 seasons (IDs: 5-9)
  {
    id: 5,
    seriesId: 'series-2',
    seasonNumber: 1,
    name: 'Season 1',
    createdAt: new Date().toISOString()
  },
  {
    id: 6,
    seriesId: 'series-2',
    seasonNumber: 2,
    name: 'Season 2',
    createdAt: new Date().toISOString()
  },
  {
    id: 7,
    seriesId: 'series-2',
    seasonNumber: 3,
    name: 'Season 3',
    createdAt: new Date().toISOString()
  },
  {
    id: 8,
    seriesId: 'series-2',
    seasonNumber: 4,
    name: 'Season 4',
    createdAt: new Date().toISOString()
  },
  {
    id: 9,
    seriesId: 'series-2',
    seasonNumber: 5,
    name: 'Season 5',
    createdAt: new Date().toISOString()
  },
  // The Crown - 6 seasons (IDs: 10-15)
  {
    id: 10,
    seriesId: 'series-3',
    seasonNumber: 1,
    name: 'Season 1',
    createdAt: new Date().toISOString()
  },
  {
    id: 11,
    seriesId: 'series-3',
    seasonNumber: 2,
    name: 'Season 2',
    createdAt: new Date().toISOString()
  },
  {
    id: 12,
    seriesId: 'series-3',
    seasonNumber: 3,
    name: 'Season 3',
    createdAt: new Date().toISOString()
  },
  {
    id: 13,
    seriesId: 'series-3',
    seasonNumber: 4,
    name: 'Season 4',
    createdAt: new Date().toISOString()
  },
  {
    id: 14,
    seriesId: 'series-3',
    seasonNumber: 5,
    name: 'Season 5',
    createdAt: new Date().toISOString()
  },
  {
    id: 15,
    seriesId: 'series-3',
    seasonNumber: 6,
    name: 'Season 6',
    createdAt: new Date().toISOString()
  }
];
