import { Text } from "@rneui/base";
import { View } from "react-native";

const TextWithDotCircle = ({ circleColor, text }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          backgroundColor: circleColor,
          width: 10,
          height: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 5,
          marginRight: 3,
        }}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default TextWithDotCircle;
