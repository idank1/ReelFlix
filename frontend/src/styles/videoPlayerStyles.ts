import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export const VIDEO_HEIGHT = (SCREEN_WIDTH * 9) / 16; // 16:9 aspect ratio

export const videoPlayerStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  video: {
    width: SCREEN_WIDTH,
    height: VIDEO_HEIGHT,
    backgroundColor: '#000',
  },
  infoContainer: {
    flex: 1,
    backgroundColor: '#141414',
    padding: 16,
  },
  seriesName: {
    fontSize: 14,
    color: '#e50914',
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  seasonName: {
    fontSize: 14,
    color: '#808080',
    marginBottom: 8,
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e5e5e5',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#b3b3b3',
    marginBottom: 16,
    lineHeight: 22,
  },
  metadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  metadataText: {
    fontSize: 14,
    color: '#808080',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#2a2a2a',
    borderRadius: 2,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#e50914',
  },
  watchedButton: {
    backgroundColor: '#e50914',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  watchedButtonActive: {
    backgroundColor: '#4caf50',
  },
  watchedButtonDisabled: {
    opacity: 0.6,
  },
  watchedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

