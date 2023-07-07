import { Text } from "@rneui/base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import SkiCentersScreen from "../screens/App/SkiCentersScreen";
import SkiCenterDetailsScreen from "../screens/App/SkiCenterDetailsScreen";
import FriendsFeedScreen from "../screens/App/FriendsFeedScreen";
import DailyFormScreen from "../screens/App/DailyFormScreen";

const Stack = createNativeStackNavigator();

const NavigationFriendFeed = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Friends Feed"
        component={FriendsFeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Daily Form"
        component={DailyFormScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigationFriendFeed;
