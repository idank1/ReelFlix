import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';
import { RootStackParamList } from '../../App';
import { useMarkEpisodeAsWatched, useMarkEpisodeAsUnwatched } from '../services/episodesService';
import { useVideoPlayback } from '../hooks/useVideoPlayback';
import { videoPlayerStyles } from '../styles/videoPlayerStyles';

type VideoPlayerRouteProp = RouteProp<RootStackParamList, 'VideoPlayer'>;

/**
 * Video Player Container
 * Handles video playback logic and displays video player with episode information
 */
export default function VideoPlayerContainer() {
  const route = useRoute<VideoPlayerRouteProp>();
  const { episode } = route.params;
  const [isWatched, setIsWatched] = useState(episode.watched);

  const markAsWatchedMutation = useMarkEpisodeAsWatched();
  const markAsUnwatchedMutation = useMarkEpisodeAsUnwatched();
  const { videoRef, status, setStatus } = useVideoPlayback();

  const handleMarkAsWatched = () => {
    if (isWatched || markAsWatchedMutation.isPending) return;
    markAsWatchedMutation.mutate(episode.id, {
      onSuccess: () => {
        setIsWatched(true);
      },
    });
  };

  const handleMarkAsUnwatched = () => {
    if (!isWatched || markAsUnwatchedMutation.isPending) return;
    markAsUnwatchedMutation.mutate(episode.id, {
      onSuccess: () => {
        setIsWatched(false);
      },
    });
  };

  // Auto-mark as watched when video finishes
  useEffect(() => {
    if (status?.isLoaded && status.didJustFinish && !isWatched) {
      handleMarkAsWatched();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, isWatched]);

  const formatDuration = (milliseconds: number): string => {
    const seconds = Math.floor(milliseconds / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = (): number => {
    if (!status?.isLoaded) return 0;
    if (!status.durationMillis || status.durationMillis === 0) return 0;
    return status.positionMillis / status.durationMillis;
  };

  const isMarkingWatched = markAsWatchedMutation.isPending || markAsUnwatchedMutation.isPending;

  return (
    <SafeAreaView style={videoPlayerStyles.safeArea}>
      <View style={videoPlayerStyles.container}>
      <Video
        ref={videoRef}
        style={videoPlayerStyles.video}
        source={{ uri: episode.videoUrl }}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
        onPlaybackStatusUpdate={setStatus}
        shouldPlay={true}
      />

      <View style={videoPlayerStyles.infoContainer}>
        {episode.series && (
          <Text style={videoPlayerStyles.seriesName}>{episode.series.name}</Text>
        )}
        {episode.season && (
          <Text style={videoPlayerStyles.seasonName}>
            {episode.season.name} • Episode {episode.episodeNumber}
          </Text>
        )}
        <Text style={videoPlayerStyles.title}>{episode.title}</Text>
        {episode.description && (
          <Text style={videoPlayerStyles.description}>{episode.description}</Text>
        )}

        <View style={videoPlayerStyles.metadata}>
          {!episode.season && (
            <Text style={videoPlayerStyles.metadataText}>
              Episode {episode.episodeNumber}
            </Text>
          )}
          {status?.isLoaded && status.durationMillis && status.durationMillis > 0 && (
            <Text style={videoPlayerStyles.metadataText}>
              {formatDuration(status.positionMillis)} /{' '}
              {formatDuration(status.durationMillis)}
            </Text>
          )}
        </View>

        <View style={videoPlayerStyles.progressBar}>
          <View
            style={[videoPlayerStyles.progressFill, { width: `${getProgress() * 100}%` }]}
          />
        </View>

        <TouchableOpacity
          style={[
            videoPlayerStyles.watchedButton,
            isWatched && videoPlayerStyles.watchedButtonActive,
            isMarkingWatched && videoPlayerStyles.watchedButtonDisabled,
          ]}
          onPress={isWatched ? handleMarkAsUnwatched : handleMarkAsWatched}
          disabled={isMarkingWatched}
        >
          {isMarkingWatched ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={videoPlayerStyles.watchedButtonText}>
              {isWatched ? '✓ Mark as Unwatched' : 'Mark as Watched'}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
  );
}
