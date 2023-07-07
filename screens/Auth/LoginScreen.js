import { useState } from "react";
import { View, StyleSheet, Image, Dive, TouchableOpacity } from "react-native";
import { Divider, Text } from "@rneui/base";
import { Input, Icon } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/base";
// Components
import TitlePhotoAuth from "../../components/TitlePhotoAuth";
import BackgroundWithLogo from "../../components/auth/BackgroundWithLogo";
// utils
import colors from "../../utils/colors";
import { AntDesign } from "@expo/vector-icons";
import { logInWithEmailAndPassword } from "../../firebase/firebase.utils";
import fonts from "../../utils/fonts";
import screens from "../../utils/screens";

// const TextDivider = ({ text }) => (
//   <View style={{ flexDirection: "row", alignItems: "center" }}>
//     <Divider style={{ flex: 1 }} />
//     <Text style={{ marginHorizontal: 16 }}>{text}</Text>
//     <Divider style={{ flex: 1 }} />
//   </View>
// );

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <BackgroundWithLogo />
      <View style={[styles.textContainerTitle]}>
        <Text style={[styles.defaulText, styles.welcomeText]}>
          Welcome Back!
        </Text>
        <Text style={[styles.defaulText, styles.instructionsText]}>
          Enter Your Username & Password
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          style={[styles.inputText, styles.defaulText]}
          placeholderTextColor={colors.textColorDark}
          onChangeText={setEmail}
          // leftIcon={<Ionicons name="mail-outline" size={24} color="black" />}
        />
        <Input
          placeholder="Password"
          inputStyle={{ padding: 0 }}
          secureTextEntry={true}
          style={[styles.inputText, styles.defaulText]}
          placeholderTextColor={colors.textColorDark}
          onChangeText={setPassword}
          // leftIcon={<Ionicons name="help-outline" size={24} color="black" />}
        />
        <View style={styles.buttonsContainer}>
          <Button
            size="md"
            color={colors.skyColor}
            buttonStyle={{
              borderRadius: 30,
              marginVertical: 2,
            }}
            titleStyle={styles.defaulText}
            title="Log In"
            onPress={() => logInWithEmailAndPassword(email, password)}
          />
        </View>
        <View style={{ alignSelf: "center", marginTop: 14 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.resetPassword)}
          >
            <Text style={[styles.defaulText, styles.textForgetAndNewAccount]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(screens.register)}
          >
            <Text
              style={[
                styles.defaulText,
                styles.textForgetAndNewAccount,
                {
                  textDecorationLine: "underline",
                  fontFamily: fonts.textTitle,
                  fontSize: 16,
                  color: "#666565",
                },
              ]}
            >
              Or Create a New Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
  },
  textForgetAndNewAccount: {
    color: colors.subtititleColor,
    margin: 2,
    textAlign: "center",
  },
  textContainerTitle: {
    marginLeft: 50,
    marginTop: 30,
  },
  divider: {
    marginHorizontal: 20,
  },
  inputContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    paddingTop: 50,
  },
  inputText: {
    color: colors.textColorDark,
    paddingLeft: 10,
  },
  registerButton: {
    borderRadius: 8,
  },
  defaulText: {
    fontFamily: fonts.textDefault,
  },
  welcomeText: {
    fontSize: 26,
    color: colors.textColorDark,
    fontFamily: fonts.textTitle,
  },
  instructionsText: {
    fontSize: 14,
    color: colors.subtititleColor,
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
