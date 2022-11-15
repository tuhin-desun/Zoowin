import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screen/Home";
import LogIn from "../screen/LogIn";
import Register from "../screen/Register";
import Account from "../screen/Account";
import MainStackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          primary: "rgb(255, 45, 85)",
          background: "red",
          card: "rgb(255, 255, 255)",
          text: "rgb(28, 28, 30)",
          border: "rgb(199, 199, 204)",
          notification: "rgb(255, 69, 58)",
        },
      }}
    >
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          // drawerActiveBackgroundColor: "#ff5247",
        }}
      >
        <Drawer.Screen
          name="Log In"
          options={{ headerShown: false }}
          component={LogIn}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
