import './global.css'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = "light";
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require('../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Black": require('../assets/fonts/Poppins-Black.ttf'),
    "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
    "Poppins-ExtraBold": require('../assets/fonts/Poppins-ExtraBold.ttf'),
    "Poppins-ExtraLight": require('../assets/fonts/Poppins-ExtraLight.ttf'),
    "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
    "Poppins-Medium": require('../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Thin": require('../assets/fonts/Poppins-Thin.ttf'),
  });

  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);


  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
