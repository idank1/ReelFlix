import { useQuery } from '@tanstack/react-query';
import { Series } from '../types';
import { seriesApi } from './http/seriesApi';

/**
 * React Query hook for fetching all series
 */
export function useSeries() {
  return useQuery({
    queryKey: ['series'],
    queryFn: async (): Promise<Series[]> => {
      const response = await seriesApi.getSeries();
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to load series');
      }
      return response.data;
    },
  });
}

/**
 * React Query hook for fetching a single series by ID
 */
export function useSeriesById(id: string) {
  return useQuery({
    queryKey: ['series', id],
    queryFn: async (): Promise<Series> => {
      const response = await seriesApi.getSeriesById(id);
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to load series');
      }
      return response.data;
    },
    enabled: !!id,
  });
}

