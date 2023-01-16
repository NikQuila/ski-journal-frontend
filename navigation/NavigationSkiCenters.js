import { Text } from "@rneui/base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import SkiCentersScreen from "../screens/App/SkiCentersScreen";
import SkiCenterDetailsScreen from "../screens/App/SkiCenterDetailsScreen";

const Stack = createNativeStackNavigator();

const PruebaScreen = () => {
  return <Text> Probando</Text>;
};

const NavigationSkiCenters = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ski Centers Stack"
        component={SkiCentersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ski Center Details"
        component={SkiCenterDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavigationSkiCenters;
