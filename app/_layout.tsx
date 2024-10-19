import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import Providers from "@/src/components/layout/Providers";
import { redirectAuth } from "@/src/hooks/redirectAuth";
import { useSessionStore } from "@/src/store/useSessionStore";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Providers>
      <RootLayoutMain />
    </Providers>
  );
}
function RootLayoutMain() {
<<<<<<< HEAD:Burger-app/app/_layout.tsx
=======

>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:app/_layout.tsx
  // redirectAuth();
  return (
    <Stack>
      <Stack.Screen name="auth" options={{ headerShown: false }} />
<<<<<<< HEAD:Burger-app/app/_layout.tsx
      <Stack.Screen name="main" options={{ headerShown: false }} />


        <Stack.Screen name="address" options={{ headerShown: false, }}/>
        <Stack.Screen name="ProfileScreen" options={{ headerShown: false, }}/>
        <Stack.Screen name="orderhistory" options={{ headerShown: false, }}/>
=======
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:app/_layout.tsx
 

   
         <Stack.Screen name="(drawer)" options={{ headerShown: false, }} />
      </Stack>

  );
}