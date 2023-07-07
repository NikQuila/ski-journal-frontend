import { Text, Card, Button, Icon, Divider } from "@rneui/base";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import fonts from "../utils/fonts";

const SkiCenterCard = ({ title, imageUrl, description, id }) => {
  const navigation = useNavigation();

  return (
    <Card
      containerStyle={{
        padding: 0,
        height: 300,
        width: 320,
        alignSelf: "center",
        borderRadius: 10,
        justifyContent: "center", //Centered horizontally
        alignItems: "center", //Centered vertically
        flex: 1,
      }}
    >
      <Image
        style={{ resizeMode: "stretch", borderRadius: 10 }}
        source={{
          uri: imageUrl,
          width: 320,
          height: 300,
        }}
      />
      <View
        style={{
          position: "absolute",
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        <Text
          h4
          style={{
            color: "white",
            marginLeft: 8,
          }}
        >
          {id + 1}
        </Text>
        <Divider style={{ width: 30 }} color="white" width={5} />
      </View>
      <View
        style={{
          position: "absolute",
          alignSelf: "flex-end",
          flexDirection: "row",
          paddingRight: 10,
          paddingTop: 10,
        }}
      >
        <Ionicons
          name="people-outline"
          style={{ marginTop: 5 }}
          color={"white"}
          size={30}
        />
        <View style={{ marginLeft: 5 }}>
          <Text
            style={{
              fontFamily: fonts.textDefault,
              color: "white",
              paddingLeft: 10,
            }}
          >
            20
          </Text>
          <Text
            style={{
              fontFamily: fonts.textDefault,
              color: "white",
            }}
          >
            Today
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: fonts.textDefault,
          fontSize: 24,
          position: "absolute",
          color: "white",
          alignSelf: "center",
          marginTop: "40%",
        }}
      >
        {title}
      </Text>
      {/* // Snow Conidtions */}
      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          alignSelf: "flex-start",
          flexDirection: "row",
          paddingRight: 10,
          paddingTop: 10,
        }}
      >
        <View>
          <Ionicons
            name="snow-outline"
            style={{ marginTop: 5 }}
            color={"white"}
            size={30}
          />
          {/* <Text style={[styles.defaultText]}>Conditions</Text> */}
        </View>
        <View style={{ marginLeft: 5, marginTop: 5 }}>
          <Text
            style={{
              fontFamily: fonts.textDefault,
              color: "rgba(0, 255, 231, 1)",
              paddingLeft: 22,
            }}
          >
            Icy
          </Text>
          <Text
            style={{
              fontFamily: fonts.textDefault,
              color: "white",
            }}
          >
            Conditions
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  defaultText: {
    color: "white",
    fontFamily: fonts.textDefault,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  textDescription: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default SkiCenterCard;
