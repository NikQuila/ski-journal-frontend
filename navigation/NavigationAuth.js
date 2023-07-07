// React
import { useEffect } from "react";
// React Native
import { Image } from "react-native";
// React Nav
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Redux
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../store/user/user.action";
// Firebase
import { onAuthStateChangedListener } from "../firebase/firebase.utils";
import { createUserAuthAndDoc } from "../firebase/firebase.utils";
// Screens
import RegisterScreen from "../screens/Auth/RegisterScreen";
import LoginScreen from "../screens/Auth/LoginScreen";
import LoginScreen2 from "../screens/Auth/LoginScreen2";
import ForgotPasswordScreen from "../screens/Auth/ForgotPasswordScreen";
// Utils
import colors from "../utils/colors";
//Icons
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "../store/store";

// Bottom Tab New
const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavigationAuth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Log in" component={LoginScreen} options={{}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{}} />
        <Stack.Screen name="Reset password" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationAuth;
