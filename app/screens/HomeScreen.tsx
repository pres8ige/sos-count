import { useRouter } from 'expo-router'; // Hook for navigation
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CounterButton from '../../components/CounterButton';
import SosButton from '../../components/SosButton';

const HomeScreen = () => {
  const router = useRouter();

  const openModal = () => {
    router.push('/modal'); // Correct path to modal screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Go to HomeScreen</Text>
      <Button title="Open Modal" onPress={openModal} />

      {/* Extra features */}
      <View style={styles.extra}>
        <CounterButton />
        <View style={{ marginTop: 15 }} />
        <SosButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  extra: {
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
});

export default HomeScreen;
