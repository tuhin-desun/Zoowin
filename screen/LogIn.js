import * as React from "react";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const LogIn = () => {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://shivwinmall.in/login" }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LogIn;
