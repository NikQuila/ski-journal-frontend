// React Native
import { Image } from "react-native";
// React Nav
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import RegisterScreen from "../screens/Auth/RegisterScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import LoginScreen2 from "../screens/Auth/LoginScreen2";
// Utils
// import colors from "../utils/colors";
//Icons
import { Ionicons } from "@expo/vector-icons";

// Bottom Tab New
const BottomTab = createBottomTabNavigator();

const NavigationAuth = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <BottomTab.Screen
          name="Log in"
          component={LoginScreen2}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Admin Ski Slope"
          component={RegisterScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-add-outline" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationAuth;
