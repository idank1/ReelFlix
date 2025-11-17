import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { EpisodeCardProps } from './types';
import { styles } from './styles';

export default function EpisodeCard({ episode, onPress }: EpisodeCardProps) {
  const formatDuration = (seconds?: number): string => {
    if (!seconds) return 'N/A';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={2}>
            {episode.title}
          </Text>
          {episode.watched && (
            <View style={styles.watchedBadge}>
              <Text style={styles.watchedText}>✓</Text>
            </View>
          )}
        </View>
        {episode.description && (
          <Text style={styles.description} numberOfLines={2}>
            {episode.description}
          </Text>
        )}
        <View style={styles.footer}>
          <View style={styles.episodeInfo}>
            {episode.series && (
              <Text style={styles.seriesName}>{episode.series.name}</Text>
            )}
            {episode.season && (
              <Text style={styles.seasonInfo}>
                {episode.season.name} • Episode {episode.episodeNumber}
              </Text>
            )}
            {!episode.season && (
              <Text style={styles.episodeNumber}>
                Episode {episode.episodeNumber}
              </Text>
            )}
          </View>
          <Text style={styles.duration}>
            {formatDuration(episode.duration)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

