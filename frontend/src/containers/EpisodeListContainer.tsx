import React, { useState } from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Episode } from '../types';
import { useRails } from '../services/railsService';
import { useFilteredRails } from '../hooks/useFilteredRails';
import { useEpisodeListHeader } from '../hooks/useEpisodeListHeader';
import RailComponent from '../components/Rail';
import FilterBar from '../components/FilterBar';
import { episodeListStyles } from '../styles/episodeListStyles';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

/**
 * Episode List Container
 * Handles data fetching, state management, and displays rails of episodes
 */
export default function EpisodeListContainer() {
  const navigation = useNavigation<NavigationProp>();
  const [showUnwatchedOnly, setShowUnwatchedOnly] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Fetch rails using React Query
  const {
    data: railsData,
    isLoading,
    error: queryError,
    refetch,
    isRefetching,
  } = useRails();

  // Apply filter to rails
  const rails = useFilteredRails(railsData, showUnwatchedOnly);

  // Set up header with filter button
  useEpisodeListHeader(
    navigation,
    showUnwatchedOnly,
    () => setShowFilterModal(true)
  );

  const handleEpisodePress = (episode: Episode) => {
    navigation.navigate('VideoPlayer', { episode });
  };

  // Only show loading state on initial load (when there's no cached data)
  if (isLoading && !railsData) {
    return (
      <SafeAreaView style={episodeListStyles.safeArea}>
        <View style={episodeListStyles.centerContainer}>
          <ActivityIndicator size="large" color="#e50914" />
          <Text style={episodeListStyles.loadingText}>Loading content...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (queryError) {
    return (
      <SafeAreaView style={episodeListStyles.safeArea}>
        <View style={episodeListStyles.centerContainer}>
          <Text style={episodeListStyles.errorText}>
            {queryError instanceof Error ? queryError.message : 'An unexpected error occurred'}
          </Text>
          <Text style={episodeListStyles.retryText} onPress={() => refetch()}>
            Tap to retry
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={episodeListStyles.safeArea}>
      <View style={episodeListStyles.container}>
        <FilterBar
          showUnwatchedOnly={showUnwatchedOnly}
          onToggleUnwatched={() => setShowUnwatchedOnly(!showUnwatchedOnly)}
          visible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
        />
        <ScrollView
          style={episodeListStyles.scrollView}
          contentContainerStyle={episodeListStyles.scrollContent}
          refreshControl={
            <RefreshControl
              refreshing={isRefetching}
              onRefresh={() => refetch()}
              tintColor="#e50914"
            />
          }
        >
          {rails.length === 0 ? (
            <View style={episodeListStyles.emptyContainer}>
              <Text style={episodeListStyles.emptyText}>No content found</Text>
            </View>
          ) : (
            <>
              {rails.map((rail) => (
                <RailComponent
                  key={rail.id}
                  seriesName={rail.title}
                  subtitle={rail.subtitle}
                  episodes={rail.episodes}
                  onEpisodePress={handleEpisodePress}
                />
              ))}
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
