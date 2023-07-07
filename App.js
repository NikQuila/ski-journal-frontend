import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
// Redux
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
// Navigations
import NavigationController from "./navigation/NavigationController";
// Firebase
import { LogBox } from "react-native";
// Fonts
import fonts from "./utils/fonts";
// Ignore log notification by message
LogBox.ignoreLogs([
  `Warning: Each child in a list should have a unique "key" prop.`,
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);

export default function App() {
  const [fontsLoaded] = useFonts({
    "dyna-puff-bold": require("./assets/fonts/DynaPuff-Bold.ttf"),
    "dyna-puff-regular": require("./assets/fonts/DynaPuff-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  // Auth
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const unSubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserAuthAndDoc(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   });
  //   return unSubscribe;
  // }, []);

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <NavigationController />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  searchIcon: {
    fontSize: 24,
    marginRight: 10,
  },
});
