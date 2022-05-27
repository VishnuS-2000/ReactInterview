import React from "react";
import { Button, View, Text } from "react-native";

function Home({ text, change }) {
  const handlePress = () => {
    change("Profile");
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
      <Text>{text}</Text>
      <Button title="Go to Profile" onPress={handlePress} />
    </View>
  );
}

export default Home;
