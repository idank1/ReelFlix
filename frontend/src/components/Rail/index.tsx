import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import EpisodeThumbnail from '../EpisodeThumbnail';
import { RailProps } from './types';
import { styles } from './styles';

export default function Rail({ seriesName, episodes, onEpisodePress, subtitle }: RailProps) {
  if (episodes.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.seriesTitle}>{seriesName}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
        <Text style={styles.episodeCount}>{episodes.length} {episodes.length === 1 ? 'episode' : 'episodes'}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {episodes.map((episode) => (
          <EpisodeThumbnail
            key={episode.id}
            episode={episode}
            onPress={() => onEpisodePress(episode)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

