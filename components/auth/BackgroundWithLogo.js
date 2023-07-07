import { Text } from "@rneui/base";
import { View, Image } from "react-native";

const BackgroundWithLogo = () => {
  return (
    <>
      <Image
        style={{
          position: "absolute",
          top: 0,
          resizeMode: "cover",
          opacity: 0.3,
        }}
        source={{
          uri: "https://images.pexels.com/photos/2013658/pexels-photo-2013658.jpeg?cs=srgb&dl=pexels-samuel-walker-2013658.jpg&fm=jpg",
          width: "100%",
          height: "100%",
        }}
      />
      <View
        style={{
          height: 200,
          width: 200,
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../../assets/logo/Horizontal2.png")}
          style={{ resizeMode: "contain", height: "100%", width: "100%" }}
        />
      </View>
    </>
  );
};
export default BackgroundWithLogo;
