import * as React from "react";
import { WebView } from "react-native-webview";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Home() {
  return (
    <>
      {/* <StatusBar hidden={"true"} /> */}
      <WebView
        style={styles.container}
        source={{ uri: "https://shivwinmall.in/" }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
