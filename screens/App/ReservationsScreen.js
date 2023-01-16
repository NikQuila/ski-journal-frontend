import { Text } from "@rneui/base";
import { View } from "react-native";
// Components
import ReservationCard from "../../components/ReservationCard";

const ReservationScreen = () => {
  return (
    <View>
      <ReservationCard status={"aproved"} />
      <ReservationCard status={"pending"} />
    </View>
  );
};

export default ReservationScreen;
