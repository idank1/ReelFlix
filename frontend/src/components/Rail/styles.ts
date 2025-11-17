import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
  },
  seriesTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e5e5e5',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    color: '#808080',
    fontWeight: '400',
    marginTop: 2,
  },
  episodeCount: {
    fontSize: 13,
    color: '#808080',
    fontWeight: '400',
  },
  scrollView: {
    marginLeft: 16,
  },
  scrollContent: {
    paddingRight: 16,
  },
});

