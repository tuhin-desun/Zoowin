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
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Log In"
          options={{ headerShown: false }}
          component={LogIn}
        />
        <Drawer.Screen
          name="Home"
          component={Account}
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
