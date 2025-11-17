import { useQuery } from '@tanstack/react-query';
import { Season } from '../types';
import { seasonsApi } from './http/seasonsApi';

/**
 * React Query hook for fetching all seasons
 */
export function useSeasons() {
  return useQuery({
    queryKey: ['seasons'],
    queryFn: async (): Promise<Season[]> => {
      const response = await seasonsApi.getSeasons();
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to load seasons');
      }
      return response.data;
    },
  });
}

/**
 * React Query hook for fetching a single season by ID
 */
export function useSeason(id: number) {
  return useQuery({
    queryKey: ['seasons', id],
    queryFn: async (): Promise<Season> => {
      const response = await seasonsApi.getSeasonById(id);
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to load season');
      }
      return response.data;
    },
    enabled: !!id,
  });
}

/**
 * React Query hook for fetching seasons by series ID
 */
export function useSeasonsBySeriesId(seriesId: string) {
  return useQuery({
    queryKey: ['seasons', 'series', seriesId],
    queryFn: async (): Promise<Season[]> => {
      const response = await seasonsApi.getSeasonsBySeriesId(seriesId);
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to load seasons');
      }
      return response.data;
    },
    enabled: !!seriesId,
  });
}

