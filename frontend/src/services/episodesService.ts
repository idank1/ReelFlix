import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Episode, SortOption, SortOrder } from '../types';
import { episodesApi, EpisodeFilters } from './http/episodesApi';

/**
 * React Query hook for fetching episodes
 */
export function useEpisodes(
  filters?: EpisodeFilters,
  sortBy?: SortOption,
  sortOrder?: SortOrder
) {
  return useQuery({
    queryKey: ['episodes', filters, sortBy, sortOrder],
    queryFn: async (): Promise<Episode[]> => {
      const response = await episodesApi.getEpisodes(filters, sortBy, sortOrder);
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to load episodes');
      }
      return response.data;
    },
  });
}

/**
 * React Query hook for fetching a single episode by ID
 */
export function useEpisode(id: number) {
  return useQuery({
    queryKey: ['episodes', id],
    queryFn: async (): Promise<Episode> => {
      const response = await episodesApi.getEpisodeById(id);
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to load episode');
      }
      return response.data;
    },
    enabled: !!id,
  });
}

/**
 * React Query mutation for marking episode as watched
 */
export function useMarkEpisodeAsWatched() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (episodeId: number): Promise<Episode> => {
      const response = await episodesApi.markAsWatched(episodeId);
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to mark episode as watched');
      }
      return response.data;
    },
    onSuccess: (data, episodeId) => {
      // Invalidate rails query to refetch with updated watched status
      queryClient.invalidateQueries({ queryKey: ['rails'] });
      // Update the specific episode in cache
      queryClient.setQueryData(['episodes', episodeId], data);
      // Invalidate episodes list queries
      queryClient.invalidateQueries({ queryKey: ['episodes'] });
    },
  });
}

/**
 * React Query mutation for marking episode as unwatched
 */
export function useMarkEpisodeAsUnwatched() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (episodeId: number): Promise<Episode> => {
      const response = await episodesApi.markAsUnwatched(episodeId);
      if (!response.success || !response.data) {
        throw new Error(response.error || 'Failed to mark episode as unwatched');
      }
      return response.data;
    },
    onSuccess: (data, episodeId) => {
      // Invalidate rails query to refetch with updated watched status
      queryClient.invalidateQueries({ queryKey: ['rails'] });
      // Update the specific episode in cache
      queryClient.setQueryData(['episodes', episodeId], data);
      // Invalidate episodes list queries
      queryClient.invalidateQueries({ queryKey: ['episodes'] });
    },
  });
}
