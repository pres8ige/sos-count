// app/_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router'; // This will load the correct screen automatically
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'; // Import this at the top
import { useColorScheme } from '../hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* The Slot component renders the current screen */}
      <Slot />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
