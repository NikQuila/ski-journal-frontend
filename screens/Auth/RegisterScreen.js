import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Input, Icon } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/base";
// Auth
import {
  createUserAuthAndDoc,
  signOutUser,
} from "../../firebase/firebase.utils";
// Components
import TitlePhotoAuth from "../../components/TitlePhotoAuth";
import BackgroundWithLogo from "../../components/auth/BackgroundWithLogo";
// utils
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import screens from "../../utils/screens";

const RegisterScreen = ({ navigation }) => {
  const [newUserFormData, setNewUserFormData] = useState({});

  const handleChangeForm = (event, name) => {
    const { text } = event.nativeEvent;
    setNewUserFormData((values) => ({ ...values, [name]: text }));
  };
  return (
    <View style={styles.container}>
      <BackgroundWithLogo />
      <View style={{ marginLeft: 40 }}>
        <Text style={styles.registerText}>Create Account</Text>
        <Text style={styles.instructionsText}>
          Please enter info for create account
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          name={"name"}
          placeholder="Name"
          onChange={(e) => handleChangeForm(e, "name")}
          style={[styles.defaultText, styles.inputText]}
          placeholderTextColor={colors.textColorDark}
          // leftIcon={<Ionicons name="card-outline" size={24} color="black" />}
        />
        <Input
          name={"lastName"}
          placeholder="Last Name"
          onChange={(e) => handleChangeForm(e, "lastName")}
          style={[styles.defaultText, styles.inputText]}
          placeholderTextColor={colors.textColorDark}
          // leftIcon={<Ionicons name="card-outline" size={24} color="black" />}
        />

        <Input
          name={"username"}
          placeholder="Username"
          onChange={(e) => handleChangeForm(e, "username")}
          style={[styles.defaultText, styles.inputText]}
          placeholderTextColor={colors.textColorDark}
          // leftIcon={<Ionicons name="card-outline" size={24} color="black" />}
        />

        {/* <Input
          name={"club"}
          placeholder="Club Ski"
          onChange={(e) => handleChangeForm(e, "club")}
          // leftIcon={<Ionicons name="help-outline" size={24} color="black" />}
        /> */}
        {/* <Input
          name={"country"}
          placeholder="Your Country"
          onChange={(e) => handleChangeForm(e, "country")}
          // leftIcon={<Ionicons name="help-outline" size={24} color="black" />}
        /> */}
        {/* <Input
          name={"favouriteDiscipline"}
          placeholder="Favourite Discipline"
          onChange={(e) => handleChangeForm(e, "Favourite Discipline")}
          // leftIcon={<Ionicons name="help-outline" size={24} color="black" />}
        /> */}
        <Input
          name={"email"}
          placeholder="Email"
          onChange={(e) => handleChangeForm(e, "email")}
          style={[styles.defaultText, styles.inputText]}
          placeholderTextColor={colors.textColorDark}
          // leftIcon={<Ionicons name="mail-outline" size={24} color="black" />}
        />

        <Input
          name={"password"}
          placeholder="Password"
          onChange={(e) => handleChangeForm(e, "password")}
          style={[styles.defaultText, styles.inputText]}
          placeholderTextColor={colors.textColorDark}
          // leftIcon={<Ionicons name="help-outline" size={24} color="black" />}
        />
      </View>
      <View>
        <Button
          color={colors.skyColor}
          buttonStyle={{
            borderRadius: 30,
            marginHorizontal: 30,
            marginBottom: 10,
          }}
          title="Register"
          titleStyle={styles.defaultText}
          onPress={async () =>
            await createUserAuthAndDoc(
              newUserFormData.email,
              newUserFormData.password,
              newUserFormData
            )
          }
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text style={[styles.defaultText, { color: colors.subtititleColor }]}>
          Already have an Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(screens.login)}>
          <Text
            style={[
              styles.defaultText,
              {
                textDecorationLine: "underline",
                fontFamily: fonts.textTitle,
                fontSize: 16,
                marginLeft: 4,
              },
            ]}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flex: 1,
  },
  defaultText: {
    fontFamily: fonts.textDefault,
  },
  inputText: {
    color: colors.textDefaultColor,
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 30,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  registerButton: {
    borderRadius: 8,
  },
  registerText: {
    fontSize: 26,
    fontFamily: fonts.textTitle,
    color: colors.textColorDark,
  },
  instructionsText: {
    fontSize: 14,
    color: colors.subtititleColor,
  },
});
