import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';

import useCachedResources from './App/hooks/useCachedResources';
import useColorScheme from './App/hooks/useColorScheme';
import Navigation from './App/navigation';
import { config } from './App/overmind';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const overmind = createOvermind(config);

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <Provider value={overmind}>
        <Navigation colorScheme={colorScheme} />
      </Provider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
