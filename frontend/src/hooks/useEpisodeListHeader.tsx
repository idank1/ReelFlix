import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

/**
 * Hook to set up the episode list screen header with filter button
 */
export function useEpisodeListHeader(
  navigation: NavigationProp,
  showUnwatchedOnly: boolean,
  onFilterPress: () => void
) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={onFilterPress}
          style={styles.headerFilterButton}
          activeOpacity={0.7}
        >
          <Text style={styles.filterIcon}>⚙️</Text>
          {showUnwatchedOnly && (
            <View style={styles.headerBadge}>
              <View style={styles.headerBadgeDot} />
            </View>
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, showUnwatchedOnly, onFilterPress]);
}

const styles = StyleSheet.create({
  headerFilterButton: {
    marginRight: 4,
    padding: 8,
    position: 'relative',
  },
  filterIcon: {
    fontSize: 20,
    color: '#e5e5e5',
  },
  headerBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e50914',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBadgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e50914',
  },
});

