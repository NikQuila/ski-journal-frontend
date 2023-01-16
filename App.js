import { StyleSheet, Text } from "react-native";
import { Button } from "@rneui/base";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// Navigations
import NavigationApp from "./navigation/NavigationApp";
import NavigationAuth from "./navigation/NavigationAuth";

export default function App() {
  const [fontsLoaded] = useFonts({
    "dyna-puff-bold": require("./assets/fonts/DynaPuff-Bold.ttf"),
    "dyna-puff-regular": require("./assets/fonts/DynaPuff-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (fontsLoaded) {
    return <NavigationAuth />;
  }
}

const styles = StyleSheet.create({
  searchIcon: {
    fontSize: 24,
    marginRight: 10,
  },
});
