import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import EpisodeListContainer from './src/containers/EpisodeListContainer';
import VideoPlayerContainer from './src/containers/VideoPlayerContainer';
import { Episode } from './src/types';

export type RootStackParamList = {
  EpisodeList: undefined;
  VideoPlayer: { episode: Episode };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
    },
  },
});

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#e50914',
    background: '#141414',
    card: '#000', // Set card background to black to prevent white flash
    text: '#e5e5e5',
    border: '#2a2a2a',
    notification: '#e50914',
  },
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <NavigationContainer theme={darkTheme}>
        <Stack.Navigator
          initialRouteName="EpisodeList"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#141414',
            },
            headerTintColor: '#e5e5e5',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#e5e5e5',
            },
            contentStyle: {
              backgroundColor: '#141414',
            },
          }}
        >
          <Stack.Screen
            name="EpisodeList"
            component={EpisodeListContainer}
            options={{ title: 'ReelFlix' }}
          />
          <Stack.Screen
            name="VideoPlayer"
            component={VideoPlayerContainer}
            options={{
              title: 'Watch Episode',
              contentStyle: {
                backgroundColor: '#000',
              },
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTintColor: '#e5e5e5',
              presentation: 'transparentModal',
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </QueryClientProvider>
  );
}

