import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@rneui/base";
const TextBackground = ({ backgroundColor, text, iconName }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        backgroundColor: backgroundColor,
        borderRadius: 30,
        marginTop: 10,
        padding: 5,
        marginHorizontal: 5,
        justifyContent: "space-between",
      }}
    >
      <Ionicons
        style={{ marginLeft: 2 }}
        name={iconName}
        size={30}
        color={"white"}
      />
    </View>
  );
};

export default TextBackground;
