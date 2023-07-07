import { View, Image, StyleSheet } from "react-native";
import { Text } from "@rneui/base";

const TitlePhotoAuth = ({ noTitle }) => {
  return (
    <View>
      <Image
        source={{
          uri: "https://images.emojiterra.com/google/android-nougat/512px/26f7.png",
        }}
        style={styles.image}
      />
      {noTitle ? (
        <></>
      ) : (
        <Text h4 h4Style={styles.title}>
          Ski Journal
        </Text>
      )}
    </View>
  );
};

export default TitlePhotoAuth;

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 30,
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: "notoserif",
  },
});
