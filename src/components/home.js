import React from "react";
import { Button, View, Text } from "react-native";

function Home({ text }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: "5rem",
        alignItems: "flex-start",
        flexDirection: "row"
      }}
    >
      <Text>{text}</Text>
      <Button>Go to Profile</Button>
    </View>
  );
}

export default Home;
