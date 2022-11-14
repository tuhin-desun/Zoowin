import * as React from "react";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screen/Home";
import DrawerNavigation from "./navigation/DrawerNavigation";

export default function App() {
  return <DrawerNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
