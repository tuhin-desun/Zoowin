import * as React from "react";
import { useEffect, useState, useRef } from "react";
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
  TouchableHighlight,
  Button,
  ToastAndroid,
} from "react-native";
import Home from "./screen/Home";
import LogIn from "./screen/LogIn";
import DrawerNavigation from "./navigation/DrawerNavigation";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

let exitApp = 0;

export default function App() {
  const webview = useRef(null);
  const [canGoBack, setCanGoBack] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(true);
  // const [exitApp, setExitApp] = useState(0);

  const onAndroidBackPress = () => {
    if (canGoBack && webview.current) {
      webview.current.goBack();
      return true;
    }

    if (!canGoBack) {
      // BackHandler.exitApp();
      // return true;

      setTimeout(() => {
        // setExitApp(0);
        exitApp = 0;
      }, 2000); // 2 seconds to tap second-time

      if (exitApp === 0) {
        // setExitApp(exitApp + 1);
        exitApp++;

        ToastAndroid.show(
          "Press back button twice to exit",
          ToastAndroid.SHORT
        );
      } else if (exitApp === 1) {
        BackHandler.exitApp();
      }
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", onAndroidBackPress);
    }
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onAndroidBackPress);
    };
  }, [canGoBack]);

  return (
    <>
      <StatusBar
        animated={true}
        // barStyle={"dark-content"}
        // showHideTransition={"fade"}
        backgroundColor={"#792722"}
      />
      <WebView
        style={styles.container}
        source={{ uri: "https://shivwinmall.in/login" }}
        // source={{ uri: "https://expo.dev/" }}
        ref={webview}
        onNavigationStateChange={(navState) => {
          console.log(navState.url);
          setCurrentUrl(navState.url);
          setCanGoBack(navState.canGoBack);
        }}
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
