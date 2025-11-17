import { registerRootComponent } from 'expo';
import App from './App';

// react-native-screens disabled to prevent white flash during screen transitions
// This is a known issue with react-native-screens and dark themes
// Disabling it uses JavaScript-based navigation which doesn't have the white flash issue
// import { enableScreens } from 'react-native-screens';
// enableScreens();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

