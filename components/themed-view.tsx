// app/components/themed-view.tsx

import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface ThemedViewProps extends ViewProps {
  children: React.ReactNode;
}

const ThemedView: React.FC<ThemedViewProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.view, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20, // You can apply custom styles based on theme or requirements
    backgroundColor: '#fff', // Default background color (you can make it dynamic based on the theme)
  },
});

export { ThemedView };
