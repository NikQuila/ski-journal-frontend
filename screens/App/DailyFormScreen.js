import { useState } from "react";
import { Text, Button, Image } from "@rneui/base";
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
// Redux
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCurrentUserFB } from "../../store/userFB/userFB.selector";
import * as ImagePicker from "expo-image-picker";
// Navigation
import { useNavigation } from "@react-navigation/native";
// components
import { PickerFormInput } from "../../components/PickerInput";
import FriendFeedCard from "../../components/FriendFeedCard";
// utils
import disciplines from "../../utils/disciplines";
import snowConidtions from "../../utils/snowConditions";
import colors from "../../utils/colors";
import { uploadFormDataToUserFB } from "../../firebase/firebase.utils";
// npm
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import ToastManager, { Toast } from "toastify-react-native";
import fonts from "../../utils/fonts";

const DailyFormScreen = () => {
  const navigation = useNavigation();
  const currentUser = useSelector(selectCurrentUser);
  const userFB = useSelector(selectCurrentUserFB);
  const [disciplineSel, setDisciplineSel] = useState(2);
  const [nTurnsSel, setNTurnsSel] = useState(30);
  const [nRunsSel, setNRunsSel] = useState(4);
  const [placeSel, setPlaceSel] = useState("Pozza di Fassa");
  const [snowConidtionsSel, setSnowConditionsSel] = useState(2);
  const [sentationsSel, setSensationsSel] = useState("");
  const [pic, setPic] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const showToasts = () => {
    Toast.error("Please, upload a photo");
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.canceled) {
      setPic(result.assets[0]);
    }
  };

  const handleUpload = async () => {
    if (!pic) {
      console.log("falta foto señor");
      showToasts();
      return "nop";
    }
    setIsUploading(true);
    const dailyData = {
      discipline: disciplines[disciplineSel].label,
      username: userFB.username,
      courseTurns: nTurnsSel,
      totalRuns: nRunsSel,
      place: placeSel,
      snowConditions: snowConidtions[snowConidtionsSel].label,
      sensations: sentationsSel,
      date: new Date(),
      photoId: uuidv4(),
    };

    await uploadFormDataToUserFB(currentUser, dailyData, currentUser, pic.uri);
    setIsUploading(false);
    navigation.navigate("Friends Feed");
  };
  return (
    <View>
      {isUploading ? (
        <View style={styles.uploadingContainer}>
          <ActivityIndicator
            style={styles.spinner}
            size={80}
            color={colors.appColor}
          />
          <Text style={[styles.defaultText, styles.title]}>
            Uploading Journal, please wait :)
          </Text>
        </View>
      ) : (
        <View>
          <ToastManager />
          <Text style={[styles.defaultText, styles.title]}>
            Daily Form Screen ❄️
          </Text>
          <ScrollView style={styles.inputsContainer}>
            <PickerFormInput
              selected={disciplineSel}
              fn={setDisciplineSel}
              items={disciplines}
              label={"Discipline"}
            />
            {disciplines[disciplineSel].label == "Free Ski" ? (
              <></>
            ) : (
              <PickerFormInput
                selected={nTurnsSel}
                fn={setNTurnsSel}
                label={"Course Turns"}
                isWrite
              />
            )}
            {disciplines[disciplineSel].label == "Free Ski" ? (
              <></>
            ) : (
              <PickerFormInput
                selected={nRunsSel}
                fn={setNRunsSel}
                label={"N° Runs in Course"}
                isWrite
              />
            )}

            <PickerFormInput
              selected={placeSel}
              fn={setPlaceSel}
              label={"Place of training"}
              isWrite
              isText
            />
            <PickerFormInput
              selected={snowConidtionsSel}
              fn={setSnowConditionsSel}
              items={snowConidtions}
              label={"Snow Conditions"}
            />
            <PickerFormInput
              selected={sentationsSel}
              fn={setSensationsSel}
              label={"Sensations about the day"}
              isWrite
              isText
            />
            {pic && (
              <View style={{ alignSelf: "center" }}>
                <Text style={[styles.defaultText, { paddingBottom: 10 }]}>
                  Your Journal for 23/02/2022
                </Text>
                <FriendFeedCard
                  width={280}
                  cardProps={{
                    name: "Nicolas Pirozzi",
                    discipline: disciplines[disciplineSel].label,
                    place: placeSel,
                    snowConditions: snowConidtions[snowConidtionsSel].label,
                    imageUrl: pic.uri,
                    isFormDaily: true,
                    username: userFB.username,
                  }}
                />
              </View>
            )}

            <Button
              title={"Upload Photo of the day"}
              containerStyle={{ borderRadius: 10, marginTop: 10 }}
              buttonStyle={{
                backgroundColor: "white",
              }}
              titleStyle={{ color: colors.appColor }}
              onPress={() => pickImage()}
            />
            <Button
              title={"Submit"}
              disabled={isUploading}
              containerStyle={{
                borderRadius: 10,
                marginTop: 10,
              }}
              onPress={handleUpload}
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default DailyFormScreen;

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: fonts.textDefault,
    color: colors.textDefaultColor,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    color: colors.textDefaultColor,
  },
  inputsContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    height: "90%",
  },
  spinner: {},
  uploadingContainer: {
    alignItems: "center",
    marginTop: "50%",
  },
});
