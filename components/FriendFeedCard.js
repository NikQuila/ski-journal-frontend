import { Text, Card, Avatar } from "@rneui/base";
import { Image, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FriendFeedCard = ({ cardProps, width }) => {
  const { name, discipline, runs, place, snowConidtions, imageUrl } = cardProps;
  return (
    <View>
      <Card containerStyle={{ padding: 0, borderRadius: 10 }}>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{ width: width, height: 400, borderRadius: 10 }}
        />
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Avatar
            size={32}
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            containerStyle={{ marginLeft: 10 }}
          />
          <Text style={[styles.textImage, { marginLeft: 10 }]}>{name}</Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "rgba(3, 3, 3, 0.25)",
            borderRadius: 10,
            width: width,
            padding: 6,
          }}
        >
          <View
            style={{
              marginLeft: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="disc-outline" color={"white"} size={20} />
            <Text style={styles.textImage}> {discipline}</Text>
          </View>
          <View
            style={{
              marginLeft: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="location-outline" color={"white"} size={20} />
            <Text style={styles.textImage}> {place}</Text>
          </View>
          <View
            style={{
              marginLeft: 14,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="snow-outline" color={"white"} size={20} />
            <Text style={styles.textImage}> {snowConidtions}</Text>
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
            5 hours ago
          </Text>
        </View>
      </Card>
    </View>
  );
};

export default FriendFeedCard;

const styles = StyleSheet.create({
  textImage: {
    color: "white",
    fontFamily: "dyna-puff-regular",
    fontSize: 14,
    // marginLeft: 15,
  },
});
