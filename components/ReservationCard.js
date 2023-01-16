import { Text, Card } from "@rneui/base";
import { Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
// Components
import TextBackground from "./TextBackground";

const ReservationCard = ({ status }) => {
  return (
    <Card>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://www.dolomitisuperski.com/.imaging/mte/dolomitisuperski/730x810/dam/Comprensori-Sciistici/Val-di-Fassa/Winter/2018-2019/ROBERT_BERNARD_0936.jpg/jcr:content/ROBERT_BERNARD_0936.jpg",
          }}
          style={{ width: 150, height: 150 }}
        />
        <View style={{ marginLeft: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginTop: 3 }} name="location-outline" />
            <Text> Pozza di Fassa</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginTop: 3 }} name="calendar-outline" />
            <Text> 29/12/2022</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginTop: 3 }} name="stats-chart-outline" />
            <Text> Linea 3</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginTop: 3 }} name="time-outline" />
            <Text> 9:00 - 12:00</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginTop: 3 }} name="people-outline" />
            <Text> N° Atletas: 5</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            {status == "aproved" ? (
              <TextBackground
                backgroundColor={"#29a329"}
                iconName={"checkmark-outline"}
                text={""}
              />
            ) : (
              <TextBackground
                backgroundColor={colors.appColor}
                iconName={"code-working-outline"}
                text={""}
              />
            )}
            <TextBackground
              backgroundColor="#990000"
              iconName={"close-outline"}
              text={""}
            />
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ReservationCard;
