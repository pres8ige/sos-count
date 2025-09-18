// components/SosButton.tsx
import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

const SosButton = () => {
  const handleSOS = () => {
    Alert.alert("🚨 SOS Alert", "SOS button pressed!");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleSOS}>
      <Text style={styles.text}>SOS</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SosButton;
