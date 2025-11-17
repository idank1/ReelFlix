import { useQuery } from '@tanstack/react-query';
import { Rail } from '../types';
import { railsApi } from './http/railsApi';

/**
 * React Query hook for fetching rails
 */
export function useRails() {
  return useQuery({
    queryKey: ['rails'],
    queryFn: async (): Promise<Rail[]> => {
      const response = await railsApi.getRails();
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to load rails');
      }
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes - data is fresh for 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes - keep in cache for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when screen comes into focus (prevents white flash)
    // refetchOnMount will use staleTime - won't refetch if data is fresh
  });
}

