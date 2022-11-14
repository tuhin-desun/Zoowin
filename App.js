import * as React from "react";
import { useEffect } from "react";
import { WebView } from "react-native-webview";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  BackHandler,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Home from "./screen/Home";
import DrawerNavigation from "./navigation/DrawerNavigation";

export default function App() {
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <>
      <View style={{ marginTop: 25, backgroundColor: "#802924" }}></View>
      <DrawerNavigation />
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
