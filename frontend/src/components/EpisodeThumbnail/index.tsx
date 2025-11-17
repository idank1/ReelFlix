import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { EpisodeThumbnailProps } from './types';
import { styles, CARD_WIDTH, CARD_HEIGHT } from './styles';

export default function EpisodeThumbnail({ episode, onPress }: EpisodeThumbnailProps) {
  const [imageError, setImageError] = React.useState(false);

  // Generate a gradient color based on episode ID for placeholder
  const getGradientColor = (id: number): string => {
    const colors = [
      '#E50914', '#564d4d', '#221f1f', '#f5f5f1',
      '#564d4d', '#221f1f', '#E50914', '#f5f5f1'
    ];
    return colors[id % colors.length];
  };

  const formatDuration = (seconds?: number): string => {
    if (!seconds) return '';
    const mins = Math.floor(seconds / 60);
    return `${mins}m`;
  };

  const bgColor = getGradientColor(episode.id);
  const showImage = episode.thumbnailUrl && !imageError;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View 
        style={[
          styles.imageContainer, 
          { 
            backgroundColor: bgColor,
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
          }
        ]}
      >
        {showImage ? (
          <Image
            source={{ uri: episode.thumbnailUrl }}
            style={styles.thumbnailImage}
            resizeMode="cover"
            onError={() => {
              setImageError(true);
            }}
          />
        ) : (
          <View style={styles.placeholderContent}>
            <Text style={styles.placeholderText}>▶</Text>
          </View>
        )}
        
        {episode.watched && (
          <View style={styles.watchedOverlay}>
            <View style={styles.watchedBadge}>
              <Text style={styles.watchedText}>✓</Text>
            </View>
          </View>
        )}
        {episode.duration && (
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>{formatDuration(episode.duration)}</Text>
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {episode.title}
        </Text>
        {episode.season ? (
          <Text style={styles.seasonText} numberOfLines={1}>
            S{episode.season.seasonNumber} E{episode.episodeNumber}
          </Text>
        ) : (
          <Text style={styles.seasonText} numberOfLines={1}>
            Episode {episode.episodeNumber}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

