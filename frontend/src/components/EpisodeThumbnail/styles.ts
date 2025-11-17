import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export const CARD_WIDTH = Math.floor((SCREEN_WIDTH - 48) / 3); // 3 cards per row with padding
export const CARD_HEIGHT = Math.floor(CARD_WIDTH * 1.5); // 2:3 aspect ratio

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    marginRight: 8,
    minHeight: CARD_HEIGHT + 50, // Account for text below
  },
  imageContainer: {
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  placeholderContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  placeholderText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  watchedOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  watchedBadge: {
    backgroundColor: '#4caf50',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  watchedText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  durationBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  durationText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  infoContainer: {
    paddingHorizontal: 2,
  },
  title: {
    fontSize: 12,
    color: '#e5e5e5',
    fontWeight: '500',
    marginBottom: 4,
    lineHeight: 16,
  },
  seasonText: {
    fontSize: 11,
    color: '#808080',
    fontWeight: '400',
  },
});

