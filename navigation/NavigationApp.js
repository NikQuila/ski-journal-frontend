import { StyleSheet, Text } from "react-native";
import { Button } from "@rneui/base";
import { NavigationContainer } from "@react-navigation/native";
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

const BottomTab = createBottomTabNavigator();

const NavigationApp = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Skiers"
          component={FriendsFeedScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Places"
          component={SkiCentersScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-outline" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Calendar"
          component={SkiCenterDetailsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" color={color} size={size} />
            ),
          }}
        />

        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
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
