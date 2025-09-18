// app/hooks/use-color-scheme.ts

import { useColorScheme as useRNSColorScheme } from 'react-native'; // From react-native

// Custom hook to handle color scheme
export const useColorScheme = () => {
  const systemColorScheme = useRNSColorScheme(); // This will give 'light' or 'dark' based on system setting
  return systemColorScheme;
};
