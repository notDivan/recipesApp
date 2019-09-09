import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLording } from "expo";
import MealNavigator from "./Navigations/Mealsnavigator";
const fetchFonts = () => {
  return Font.loadAsync({
    "openSan-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "openSan-Regular": require("./assets/fonts/OpenSans-Regular.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  //if (!fontLoaded) {
  // return (
  //  <AppLording
  //   startAsync={fetchFonts}
  //   onFinish={() => setFontLoaded(true)}
  ///>
  //);
  //}

  return <MealNavigator />;
}
