import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/src/services/react-query';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return ( <QueryClientProvider  client={queryClient}>
      <RootLayoutMain/>
    </QueryClientProvider>)
}
function RootLayoutMain() {
  return (
      <Stack>
        <Stack.Screen name='auth' options={{ headerShown: false, }}/>
        <Stack.Screen name="(drawer)" options={{ headerShown: false, }} />
      </Stack>
  );

}