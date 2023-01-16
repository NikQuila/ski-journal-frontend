import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
// Components
import UserProfileCard from "../../components/UserProfiileCard";
import StadisticCard from "../../components/StadisticCard";
import colors from "../../utils/colors";
import GraficoPrueba from "../../components/GraficoPrueba";

const items = [
  {
    label: "Ski Training Days",
    value: 57,
    backgroundColor: "rgba(0, 140, 241, 0.5)",
    iconName: "hourglass-outline",
  },
  {
    label: "Favourite Place",
    value: "Pozza di Fassa",
    backgroundColor: "rgba(254, 81, 81, 0.5)",
    iconName: "location-outline",
  },
  {
    label: "More Trained Discipline",
    value: "GS",
    backgroundColor: "rgba(7, 243, 189, 0.5)",
    iconName: "heart-outline",
  },
  {
    label: "Coach Rating",
    value: 5,
    backgroundColor: "rgba(255, 186, 0, 0.5)",
    iconName: "star-outline",
  },
];

const UserScreen = () => {
  const renderItem = (item) => {
    const { label, value, backgroundColor, iconName } = item.item;
    return (
      <StadisticCard
        label={label}
        value={value}
        backgroundColor={backgroundColor}
        iconName={iconName}
      />
    );
  };
  return (
    <ScrollView>
      <UserProfileCard />
      <FlatList
        numColumns={2}
        data={items}
        renderItem={(item) => renderItem(item)}
        contentContainerStyle={styles.stadisticList}
      />
      <View style={{ alignSelf: "center" }}>
        <GraficoPrueba />
      </View>
    </ScrollView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  stadisticList: {},
});
