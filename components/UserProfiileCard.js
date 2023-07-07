import { useState, useEffect } from "react";
import { Button, Card } from "@rneui/base";
import { Image, View, StyleSheet } from "react-native";
import { Text } from "@rneui/base";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
// Redux
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selector";
import { selectCurrentUserFB } from "../store/userFB/userFB.selector";
// Firebase
import {
  getProfilePicUrl,
  uploadProfilePicToFBSAndUpdateUserDocFB,
} from "../firebase/firebase.utils";
// utils
import colors from "../utils/colors";
import fonts from "../utils/fonts";

const Label = ({ iconName, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        margin: 2,
      }}
    >
      <Ionicons style={{}} name={iconName} size={18} color={colors.appColor} />
      <Text style={styles.text}> {title}</Text>
    </View>
  );
};

const UserProfileCard = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentUserFB = useSelector(selectCurrentUserFB);
  const [cardData, setCardData] = useState({
    name: "name",
    lastName: "lastname",
    favouriteDiscipline: "discipline",
    club: "club",
    country: "country",
  });
  const [profilePic, setProfilePic] = useState(
    "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg"
  );

  const fetchData = async () => {
    if (currentUserFB.hasProfilePic) {
      const result = await getProfilePicUrl(currentUser);
      setProfilePic(result);
    }
    setCardData((values) => ({
      ...values,
      name: currentUserFB.name,
      lastName: currentUserFB.lastName,
      favouriteDiscipline: currentUserFB.favouriteDiscipline,
      club: currentUserFB.club,
      country: currentUserFB.country,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      console.log("aqui");
      setProfilePic(result.assets[0]);
      await uploadProfilePicToFBSAndUpdateUserDocFB(
        currentUser,
        result.assets[0].uri
      );
      console.log(result.assets[0]);
    }
  };
  return (
    <Card containerStyle={{ borderRadius: 10 }}>
      {/* <Card.Title h4 h4Style={[styles.textDefault]}>
        Athlete Identification
      </Card.Title> */}
      <Text style={[styles.textDefault, styles.titleIdentification]}>
        Athlete Identification
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            source={{
              uri: profilePic.uri ? profilePic.uri : profilePic,
            }}
            style={{ width: 120, height: 120, borderRadius: 10 }}
          ></Image>
          <Button
            containerStyle={{
              position: "absolute",
              right: 0,
              borderRadius: 10,
              padding: 0,
            }}
            title={"🖋️"}
            titleStyle={{ fontSize: 15 }}
            buttonStyle={{ paddingHorizontal: 5, paddingVertical: 5 }}
            onPress={() => pickImage()}
          />
        </View>

        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Label
            title={`${cardData.name} ${cardData.lastName}`}
            iconName={"person-outline"}
          />
          <Label
            title={cardData.favouriteDiscipline}
            iconName={"star-outline"}
          />
          <Label title={cardData.club} iconName={"shield-outline"} />
          <Label title={cardData.country} iconName={"flag-outline"} />
        </View>
      </View>
    </Card>
  );
};

export default UserProfileCard;

const styles = StyleSheet.create({
  textDefault: {
    fontFamily: fonts.textDefault,
  },
  titleIdentification: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 4,
  },
  text: {
    fontSize: 15,
    fontFamily: fonts.textDefault,
  },
});
