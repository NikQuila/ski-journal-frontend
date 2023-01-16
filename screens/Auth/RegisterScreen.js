import { Text, View, StyleSheet } from "react-native";
import { Input, Icon } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@rneui/base";
// Components
import TitlePhotoAuth from "../../components/TitlePhotoAuth";
// utils
import colors from "../../utils/colors";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <TitlePhotoAuth />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          // leftIcon={<Ionicons name="mail-outline" size={24} color="black" />}
        />
        {/* <Input
          placeholder="Rut"
          // leftIcon={<Ionicons name="card-outline" size={24} color="black" />}
        /> */}
        <Input
          placeholder="Password"
          // leftIcon={<Ionicons name="help-outline" size={24} color="black" />}
        />
      </View>
      <View>
        <Button
          color={colors.appColor}
          buttonStyle={{
            borderRadius: 30,
            marginHorizontal: 30,
            marginBottom: 30,
          }}
          icon={<Icon name="arrow-right" size={30} color="white" />}
          title="Log in as an Admin Ski Slope"
        />
        <Button
          color={"white"}
          buttonStyle={{
            borderRadius: 30,
            marginHorizontal: 30,
            marginBottom: 30,
          }}
          titleStyle={{
            color: colors.appColor,
          }}
          icon={<Icon name="arrow-right" size={30} color="white" />}
          title="Become an Admin Ski Slope"
        />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: "space-between",
  },
  inputContainer: {
    marginTop: 30,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  registerButton: {
    borderRadius: 8,
  },
});
