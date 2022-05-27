import React from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";

function Explore({ change, text, onChangeText }) {
  const handlePress = () => {
    console.log(text);
    change("Home");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: "5rem",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Input a Text"
      />

      <Button title="Go To Home" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});

export default Explore;
