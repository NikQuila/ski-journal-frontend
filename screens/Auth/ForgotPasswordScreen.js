import { useState } from "react";
import { Text, Input, Button } from "@rneui/base";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Components
import BackgroundWithLogo from "../../components/auth/BackgroundWithLogo";
// Firebase
import { sendPasswordReset } from "../../firebase/firebase.utils";
// Utils
import fonts from "../../utils/fonts";
import colors from "../../utils/colors";
import screens from "../../utils/screens";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleResetPassword = async () => {
    setIsSending(true);
    const isEmailSent = await sendPasswordReset(email);
    setIsSending(false);
    if (isEmailSent) {
      navigation.navigate(screens.login);
    }
  };

  return (
    <View style={styles.container}>
      <BackgroundWithLogo />
      <View>
        <Text style={[styles.titleText]}>Forgot password?</Text>
        <Text style={[styles.defaultText, styles.subtitleText]}>
          No worries, we´ll send you reset instructions
        </Text>
      </View>
      <View style={styles.inputContainer}>
        {isSending ? (
          <ActivityIndicator
            style={styles.spinner}
            size={80}
            color={colors.textColorDark}
          />
        ) : (
          <>
            <Input
              placeholder="Email"
              style={[styles.inputText, styles.defaultText]}
              placeholderTextColor={colors.textColorDark}
              onChangeText={setEmail}
              // leftIcon={<Ionicons name="mail-outline" size={24} color="black" />}
            />
            <Button
              size="md"
              color={colors.skyColor}
              buttonStyle={{
                borderRadius: 30,
                marginVertical: 2,
              }}
              titleStyle={styles.defaultText}
              title="Reset Password"
              onPress={() => handleResetPassword()}
            />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                paddingTop: 20,
              }}
            >
              <Ionicons
                name="arrow-back-outline"
                size={16}
                color={colors.subtititleColor}
              />
              <Text
                style={[
                  styles.defaultText,
                  styles.subtitleText,
                  { paddingLeft: 5 },
                ]}
              >
                Back to log in
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultText: {
    fontFamily: fonts.textDefault,
  },
  titleText: {
    fontSize: 26,
    color: colors.textColorDark,
    fontFamily: fonts.textTitle,
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 14,
    color: colors.subtititleColor,
    textAlign: "center",
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
  spinner: {},
});
