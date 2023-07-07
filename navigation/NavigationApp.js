import { StatusBar, StyleSheet, Text } from "react-native";
import { Button } from "@rneui/base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
//Screens
import WelcomeScreen from "../screens/App//WelcomeScreen";
import UserScreen from "../screens/App//UserScreen";
import SkiCentersScreen from "../screens/App/SkiCentersScreen";
import ReservationScreen from "../screens/App/ReservationsScreen";
import SkiCenterDetailsScreen from "../screens/App/SkiCenterDetailsScreen";
import FriendsFeedScreen from "../screens/App/FriendsFeedScreen";

// Nested Navigators
import NavigationSkiCenters from "./NavigationSkiCenters";
import NavigationFriendFeed from "./NavigationFriendFeed";
import colors from "../utils/colors";
import fonts from "../utils/fonts";

const BottomTab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const NavigationApp = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar barStyle={"light-content"} />
      <BottomTab.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontFamily: fonts.textDefault,
            color: colors.textDefaultColor,
          },
          headerStyle: { backgroundColor: colors.navBackgroundColor },
          tabBarStyle: { backgroundColor: colors.navBackgroundColor },
          tabBarLabelStyle: { color: colors.textDefaultColor },
        }}
      >
        <BottomTab.Screen
          name="Skiers"
          component={NavigationFriendFeed}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="people-outline"
                color={colors.textDefaultColor}
                size={size}
              />
            ),
          }}
        />
        {/* Con mas data agregare places */}
        {/* <BottomTab.Screen
          name="Places"
          component={SkiCentersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" color={color} size={size} />
            ),
          }}
        /> */}
        <BottomTab.Screen
          name="Calendar"
          component={SkiCenterDetailsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="calendar-outline"
                color={colors.textDefaultColor}
                size={size}
              />
            ),
            title: "Your Journal",
          }}
        />

        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person"
                color={colors.textDefaultColor}
                size={size}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;

const styles = StyleSheet.create({
  searchIcon: {
    fontSize: 24,
    marginRight: 10,
  },
});
