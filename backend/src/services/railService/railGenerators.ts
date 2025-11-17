import { Rail, EnrichedEpisode } from '../../types';
import { RailType } from './config';

/**
 * Rail Generator Functions
 * Each function generates a specific type of rail
 */

export interface RailGeneratorContext {
  allEpisodes: EnrichedEpisode[];
}

/**
 * Helper: Sort episodes by season and episode number
 */
function sortEpisodesBySeasonAndNumber(episodes: EnrichedEpisode[]): EnrichedEpisode[] {
  return [...episodes].sort((a, b) => {
    if (a.season && b.season) {
      if (a.season.seasonNumber !== b.season.seasonNumber) {
        return a.season.seasonNumber - b.season.seasonNumber;
      }
    }
    return a.episodeNumber - b.episodeNumber;
  });
}

/**
 * Helper: Find series IDs that have at least one watched episode
 */
function findSeriesWithWatchedEpisodes(allEpisodes: EnrichedEpisode[]): Set<string> {
  const seriesWithWatched = new Set<string>();
  allEpisodes.forEach((ep) => {
    if (ep.watched && ep.series?.id) {
      seriesWithWatched.add(ep.series.id);
    }
  });
  return seriesWithWatched;
}

/**
 * Helper: Group episodes by series ID
 */
function groupEpisodesBySeries(
  allEpisodes: EnrichedEpisode[],
  seriesIds: Set<string>
): { [seriesId: string]: EnrichedEpisode[] } {
  const episodesBySeries: { [seriesId: string]: EnrichedEpisode[] } = {};
  allEpisodes.forEach((ep) => {
    if (ep.series?.id && seriesIds.has(ep.series.id)) {
      if (!episodesBySeries[ep.series.id]) {
        episodesBySeries[ep.series.id] = [];
      }
      episodesBySeries[ep.series.id].push(ep);
    }
  });
  return episodesBySeries;
}

/**
 * Helper: Find the next unwatched episode after the last watched one in a series
 */
function findNextUnwatchedEpisode(seriesEpisodes: EnrichedEpisode[]): EnrichedEpisode | null {
  const sortedEpisodes = sortEpisodesBySeasonAndNumber(seriesEpisodes);
  
  // Verify this series actually has watched episodes
  const hasWatchedEpisodes = sortedEpisodes.some(ep => ep.watched);
  if (!hasWatchedEpisodes) {
    return null;
  }

  // Find the last watched episode
  let lastWatchedIndex = -1;
  for (let i = sortedEpisodes.length - 1; i >= 0; i--) {
    if (sortedEpisodes[i].watched) {
      lastWatchedIndex = i;
      break;
    }
  }

  // If we found a watched episode and there's a next one, return it
  if (lastWatchedIndex >= 0 && lastWatchedIndex < sortedEpisodes.length - 1) {
    const nextEpisode = sortedEpisodes[lastWatchedIndex + 1];
    if (!nextEpisode.watched) {
      return nextEpisode;
    }
  }

  return null;
}

/**
 * Helper: Sort episodes by most watched series (series with more watched episodes first)
 */
function sortByMostWatchedSeries(
  episodes: EnrichedEpisode[],
  allEpisodes: EnrichedEpisode[]
): EnrichedEpisode[] {
  return [...episodes].sort((a, b) => {
    const aSeries = allEpisodes.filter((ep) => ep.series?.id === a.series?.id && ep.watched);
    const bSeries = allEpisodes.filter((ep) => ep.series?.id === b.series?.id && ep.watched);
    return bSeries.length - aSeries.length;
  });
}

/**
 * Generate Continue Watching rail
 */
export function generateContinueWatchingRail(
  context: RailGeneratorContext,
  config?: { limit?: number; title?: string; subtitle?: string }
): Rail {
  const { allEpisodes } = context;
  
  const seriesWithWatched = findSeriesWithWatchedEpisodes(allEpisodes);

  // If no series have watched episodes, return empty rail
  if (seriesWithWatched.size === 0) {
    return {
      id: RailType.CONTINUE_WATCHING,
      title: config?.title || 'Continue Watching',
      subtitle: config?.subtitle || 'Pick up where you left off',
      episodes: [],
    };
  }

  // Group episodes by series
  const episodesBySeries = groupEpisodesBySeries(allEpisodes, seriesWithWatched);

  // Find next unwatched episode for each series
  const nextEpisodes: EnrichedEpisode[] = [];
  Object.values(episodesBySeries).forEach((seriesEpisodes) => {
    const nextEpisode = findNextUnwatchedEpisode(seriesEpisodes);
    if (nextEpisode) {
      nextEpisodes.push(nextEpisode);
    }
  });

  // Sort by most watched series
  const sortedEpisodes = sortByMostWatchedSeries(nextEpisodes, allEpisodes);

  const limit = config?.limit || 10;
  return {
    id: RailType.CONTINUE_WATCHING,
    title: config?.title || 'Continue Watching',
    subtitle: config?.subtitle || 'Pick up where you left off',
    episodes: sortedEpisodes.slice(0, limit),
  };
}

/**
 * Helper: Sort episodes for trending (by series, then season, then episode number)
 */
function sortEpisodesForTrending(episodes: EnrichedEpisode[]): EnrichedEpisode[] {
  return [...episodes].sort((a, b) => {
    if (a.series?.id !== b.series?.id) {
      return (a.series?.id || '').localeCompare(b.series?.id || '');
    }
    if (a.season && b.season) {
      if (a.season.seasonNumber !== b.season.seasonNumber) {
        return a.season.seasonNumber - b.season.seasonNumber;
      }
    }
    return a.episodeNumber - b.episodeNumber;
  });
}

/**
 * Helper: Get first episode of each series
 */
function getFirstEpisodeOfEachSeries(allEpisodes: EnrichedEpisode[]): EnrichedEpisode[] {
  const sorted = sortEpisodesForTrending(allEpisodes);
  const firstEpisodes: EnrichedEpisode[] = [];
  const seriesProcessed = new Set<string>();

  sorted.forEach((ep) => {
    if (ep.series?.id && !seriesProcessed.has(ep.series.id)) {
      firstEpisodes.push(ep);
      seriesProcessed.add(ep.series.id);
    }
  });

  return firstEpisodes;
}

/**
 * Helper: Get random later episodes (not first episode)
 */
function getRandomLaterEpisodes(allEpisodes: EnrichedEpisode[], count: number): EnrichedEpisode[] {
  return allEpisodes
    .filter((ep) => ep.episodeNumber > 1)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

/**
 * Generate Trending Now rail
 */
export function generateTrendingNowRail(
  context: RailGeneratorContext,
  config?: { limit?: number; title?: string; subtitle?: string }
): Rail {
  const { allEpisodes } = context;
  
  const firstEpisodes = getFirstEpisodeOfEachSeries(allEpisodes);
  const laterEpisodes = getRandomLaterEpisodes(allEpisodes, 5);

  const limit = config?.limit || 15;
  return {
    id: RailType.TRENDING_NOW,
    title: config?.title || 'Trending Now',
    subtitle: config?.subtitle || 'Popular picks for you',
    episodes: [...firstEpisodes, ...laterEpisodes].slice(0, limit),
  };
}

/**
 * Helper: Group episodes by series name
 */
function groupEpisodesBySeriesName(allEpisodes: EnrichedEpisode[]): { [seriesName: string]: EnrichedEpisode[] } {
  const grouped: { [seriesName: string]: EnrichedEpisode[] } = {};
  allEpisodes.forEach((episode) => {
    const seriesKey = episode.series?.name || 'Unknown Series';
    if (!grouped[seriesKey]) {
      grouped[seriesKey] = [];
    }
    grouped[seriesKey].push(episode);
  });
  return grouped;
}

/**
 * Helper: Create rail ID from series name
 */
function createSeriesRailId(seriesName: string): string {
  return `series-${seriesName.toLowerCase().replace(/\s+/g, '-')}`;
}

/**
 * Generate Series rails (one rail per series)
 */
export function generateSeriesRails(
  context: RailGeneratorContext
): Rail[] {
  const { allEpisodes } = context;
  const grouped = groupEpisodesBySeriesName(allEpisodes);
  const rails: Rail[] = [];

  Object.keys(grouped).forEach((seriesName) => {
    const seriesEpisodes = sortEpisodesBySeasonAndNumber(grouped[seriesName]);

    rails.push({
      id: createSeriesRailId(seriesName),
      title: seriesName,
      episodes: seriesEpisodes,
    });
  });

  return rails;
}
