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
      <Button
        color={"white"}
        titleStyle={{ color: colors.appColor, marginLeft: 10 }}
        buttonStyle={{
          borderRadius: 30,
          marginVertical: 20,
          marginHorizontal: 30,
        }}
        icon={<AntDesign name="google" size={24} color={colors.appColor} />}
        title="Log in with Google"
      />
      <View style={styles.divider}>
        <TextDivider text={"Or log in with"} />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          // leftIcon={<Ionicons name="mail-outline" size={24} color="black" />}
        />
        <Input
          placeholder="Password"
          // leftIcon={<Ionicons name="help-outline" size={24} color="black" />}
        />
        <View style={styles.buttonsContainer}>
          <Button
            size="md"
            color={colors.appColor}
            buttonStyle={{
              borderRadius: 30,
              marginVertical: 2,
            }}
            icon={<Icon name="arrow-right" size={30} color="white" />}
            title="Log In"
          />
          <Button
            color={"white"}
            size="lg"
            titleStyle={{ color: colors.appColor }}
            buttonStyle={{
              borderRadius: 30,
              marginTop: 10,
            }}
            title="      ? I forget my Password"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
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
