import { Series } from '../../types';

/**
 * Initial series data
 */
export const initialSeries: Series[] = [
  {
    id: 'series-1',
    name: 'Stranger Things',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'series-2',
    name: 'Breaking Bad',
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student.',
    createdAt: new Date().toISOString()
  },
  {
    id: 'series-3',
    name: 'The Crown',
    description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.',
    createdAt: new Date().toISOString()
  }
];

