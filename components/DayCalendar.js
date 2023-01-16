import { Card, Text, Divider } from "@rneui/base";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import FriendFeedCard from "./FriendFeedCard";

const cardFeedData = {
  name: "Sven Von Appen",
  discipline: "Gs",
  runs: 6,
  place: "Carezza",
  snowConidtions: "Hard",
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm74LoHUPFboIOMdUFDO9H9HUKiU1t97CU6QSxtTZAFj86y2rne12QdqwFn3gzyOfwNNg&usqp=CAU",
};
const DayCalendar = ({ dateString }) => {
  return (
    <View>
      <Card>
        <Card.Title>{dateString}</Card.Title>
        <FriendFeedCard width={266} cardProps={cardFeedData} />
        <Text style={styles.textSensations}>Sensations:</Text>
        <Text style={styles.textSensations}>
          Senti muy bien los pies sobre el piso, trabajando tobillo y roddila.
          Falta un poco de profundidad
        </Text>
      </Card>
    </View>
  );
};

export default DayCalendar;

const styles = StyleSheet.create({
  textSensations: {
    marginHorizontal: 15,
    marginTop: 5,
    fontFamily: "dyna-puff-regular",
  },
});
