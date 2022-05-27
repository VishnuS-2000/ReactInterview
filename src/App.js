import React from "react";
import { Button, View } from "react-native";

import Explore from "./components/explore";

import Home from "./components/home";
import Profile from "./components/profile";

function App() {
  const [tab, setTab] = React.useState("");
  const [text, onChangeText] = React.useState("");
  const changeTab = () => {};
  return (
    <View>
      <Explore change={changeTab} />
      <Home change={changeTab} />
      <Profile change={changeTab} />
    </View>
  );
}

export default App;
