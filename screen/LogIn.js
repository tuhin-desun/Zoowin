import * as React from "react";
import { useEffect } from "react";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, BackHandler } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Home from "./Home";
import AppContext from "../context/AppContext";

const LogIn = (props) => {
  const navigation = useNavigation();
  const context = React.useContext(AppContext);

  useEffect(() => {
    // console.log({ props });

    const backAction = () => {
      // Alert.alert("Hold on!", "Are you sure you want to go back?", [
      //   {
      //     text: "Cancel",
      //     onPress: () => null,
      //     style: "cancel",
      //   },
      //   { text: "YES", onPress: () => BackHandler.exitApp() },
      // ]);
      // return true;
      navigation.navigate("Home");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
