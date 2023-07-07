import { useEffect, useState } from "react";
import { Text, Card, Avatar } from "@rneui/base";
import { Image, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Redux
import { useSelector } from "react-redux";
import { selectCurrentUserFB } from "../store/userFB/userFB.selector";
// Firebase
import {
  getAllJournalsPhotosFB,
  getProfilePicUrl,
} from "../firebase/firebase.utils";
import { getDownloadURL } from "firebase/storage";
// Components
import ShareButton from "./ShareButton";
import fonts from "../utils/fonts";

const FriendFeedCard = ({ cardProps, width }) => {
  const [imageUrlCal, setImageUrlCal] = useState(cardProps.imageUrl);
  const [profilePicUrl, setProfilePicUrl] = useState(
    "https://hope.be/wp-content/uploads/2015/05/no-user-image.gif"
  );

  const userFB = useSelector(selectCurrentUserFB);
  const {
    name,
    discipline,
    runs,
    place,
    snowConditions,
    imageUrl,
    photoId,
    username,
    date,
    uid,
    isFormDaily,
  } = cardProps;

  const fetchData = async () => {
    // const allDailyPhotos = await getAllJournalsPhotosFB();
    // const busqueda = allDailyPhotos.find((element) => element.name === photoId);
    // const result = await getDownloadURL(busqueda);
    // setImageUrlCal(result);
    // if (userFB.hasProfilePic) {
    //   const busquedaProfilePic = await getProfilePicUrl(userFB.userID);
    //   setProfilePicUrl(busquedaProfilePic);
    // }
  };

  const setProfilePicToDailyForm = async () => {
    // if (userFB.hasProfilePic) {
    //   const busquedaProfilePic = await getProfilePicUrl(userFB.userID);
    //   setProfilePicUrl(busquedaProfilePic);
    // }
  };

  useEffect(() => {
    console.log(cardProps);
    if (cardProps.profilePicUrl) {
      console.log("aqui tamos");
      setProfilePicUrl(cardProps.profilePicUrl);
    }
    if (!imageUrl && photoId) {
      fetchData();
    }
    if (isFormDaily) {
      setProfilePicToDailyForm();
    }
  }, [imageUrl, cardProps]);

  const getTextForDate = () => {
    if (date) {
      const dateFormatted = new Date(
        date.seconds * 1000 + date.nanoseconds / 1000000
      );
      const minutosPasados = Math.floor(
        Math.abs(new Date() - dateFormatted) / 60000
      );
      if (minutosPasados < 60) {
        if (minutosPasados === 1) {
          return `${minutosPasados} minute ago`;
        }
        return `${minutosPasados} minutes ago`;
      }
      const horasPasadas = Math.floor(
        Math.abs(new Date() - dateFormatted) / 36e5
      );
      if (horasPasadas < 24) {
        if (horasPasadas === 1) {
          return `${horasPasadas} hour ago`;
        }
        return `${horasPasadas} hours ago`;
      }
      const diasPasados = Math.floor(
        Math.abs(new Date() - dateFormatted) / 86400000
      );
      if (diasPasados === 1) {
        return `${diasPasados} day ago`;
      }
      return `${diasPasados} days ago`;
    } else {
      return "18 minutes ago";
    }
  };
  return (
    <View>
      <Image
        source={{
          uri: imageUrlCal,
        }}
        style={{ width: width, height: 400, borderRadius: 10 }}
      />
      <View style={{ position: "absolute", right: 12, top: 7, zIndex: 1 }}>
        <ShareButton imageUrl={imageUrlCal} />
      </View>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(3, 3, 3, 0.1)",
          borderRadius: 10,
          width: width,
          padding: 3,
        }}
      >
        <Avatar
          size={32}
          rounded
          source={{ uri: profilePicUrl }}
          containerStyle={{ marginLeft: 10 }}
        />
        <Text style={[styles.textImage, { marginLeft: 10 }]}>{username}</Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "rgba(3, 3, 3, 0.1)",
          borderRadius: 10,
          width: width,
          padding: 6,
        }}
      >
        <View
          style={{
            marginLeft: 4,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="disc-outline" color={"white"} size={20} />
          <Text style={styles.textImage}> {discipline}</Text>
        </View>
        <View
          style={{
            marginLeft: 4,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="location-outline" color={"white"} size={20} />
          <Text style={styles.textImage}> {place}</Text>
        </View>
        <View
          style={{
            marginLeft: 4,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="snow-outline" color={"white"} size={20} />
          <Text style={styles.textImage}> {snowConditions}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.textImage,
          {
            position: "absolute",
            right: 8,
            bottom: 5,
            fontSize: 12,
          },
        ]}
      >
        {getTextForDate()}
      </Text>
    </View>
  );
};

export default FriendFeedCard;

const styles = StyleSheet.create({
  textImage: {
    color: "white",
    fontFamily: fonts.textDefault,
    fontSize: 14,
    // marginLeft: 15,
  },
});
