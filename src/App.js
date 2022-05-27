import React from "react";
import { Button, View } from "react-native";

import Explore from "./components/explore";

import Home from "./components/home";
import Profile from "./components/profile";

function App() {
  const [tab, setTab] = React.useState("Explore");
  const [text, onChangeText] = React.useState("");
  const changeTab = () => {};
  return (
    <View>
      {tab == "Explore" && (
        <Explore change={setTab} text={text} onChangeText={onChangeText} />
      )}
      {tab == "Home" && <Home change={setTab} text={text} />}
      {tab == "Profile" && <Profile change={setTab} text={text} />}
    </View>
  );
}

export default App;
