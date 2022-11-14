import * as React from "react";
import { WebView } from "react-native-webview";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const tabMenu = [];

export default function Home() {
  return (
    <>
      <WebView
        style={styles.container}
        source={{ uri: "https://shivwinmall.in/account/my-account" }}
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
