import { Episode } from '../../types';

export interface RailProps {
  seriesName: string;
  episodes: Episode[];
  onEpisodePress: (episode: Episode) => void;
  subtitle?: string;
}

