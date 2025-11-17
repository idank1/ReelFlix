import { useMemo } from 'react';
import { Rail } from '../types';

/**
 * Hook to filter rails based on watched status
 */
export function useFilteredRails(rails: Rail[] | undefined, showUnwatchedOnly: boolean): Rail[] {
  return useMemo(() => {
    if (!rails) return [];
    
    if (showUnwatchedOnly) {
      return rails
        .map(rail => ({
          ...rail,
          episodes: rail.episodes.filter(ep => !ep.watched),
        }))
        .filter(rail => rail.episodes.length > 0);
    }
    
    return rails;
  }, [rails, showUnwatchedOnly]);
}

