import { Card } from "@rneui/base";
import { Image, View } from "react-native";
import { Text } from "@rneui/base";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Label = ({ iconName, title }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Ionicons style={{ marginTop: 3 }} name={iconName} size={18} />
      <Text style={styles.text}> {title}</Text>
    </View>
  );
};

const UserProfileCard = () => {
  return (
    <Card containerStyle={{ borderRadius: 10 }}>
      <Card.Title h4>Athlete Identification</Card.Title>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/images/profilePic.jpg")}
          style={{ width: 120, height: 120, borderRadius: 10 }}
        />
        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Label title={"Nicolás Pirozzi"} iconName={"person-outline"} />
          <Label title={"20 y/o"} iconName={"hand-left-outline"} />
          <Label title={"Chile Ski Team"} iconName={"shield-outline"} />
          <Label title={"Chile"} iconName={"flag-outline"} />
        </View>
      </View>
    </Card>
  );
};

export default UserProfileCard;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
