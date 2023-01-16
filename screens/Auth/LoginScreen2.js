import { View, StyleSheet, Image, Dive } from "react-native";
import { Divider, Text } from "@rneui/base";
import { Input, Icon } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/base";
// Components
import TitlePhotoAuth from "../../components/TitlePhotoAuth";
// utils
import colors from "../../utils/colors";
import { AntDesign } from "@expo/vector-icons";
import ImagesSlider from "../../components/ImagesSlider";
// Auth
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  signIn,
} from "../../firebase/firebase.utils";

const TextDivider = ({ text }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Divider style={{ flex: 1 }} />
    <Text style={{ marginHorizontal: 16 }}>{text}</Text>
    <Divider style={{ flex: 1 }} />
  </View>
);

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePhotoAuth />
      <ImagesSlider />
      <Button
        color={"white"}
        titleStyle={{ color: colors.appColor, marginLeft: 10 }}
        buttonStyle={{
          borderRadius: 30,
          marginBottom: 40,
          marginHorizontal: 30,
        }}
        icon={<AntDesign name="google" size={24} color={colors.appColor} />}
        title="Log in with Google"
        onPress={signIn}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: "space-between",
  },
  divider: {
    marginHorizontal: 20,
  },
  inputContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  registerButton: {
    borderRadius: 8,
  },

  image: {
    width: 125,
    height: 125,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 30,
  },
  buttonsContainer: {
    marginTop: 10,
  },
});
