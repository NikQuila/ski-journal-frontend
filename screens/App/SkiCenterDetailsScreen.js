import { Button, Text } from "@rneui/base";
import { useState } from "react";
import { Image, View, TextInput, StyleSheet, ScrollView } from "react-native";
// Data
import SKI_CENTERS_DATA from "../../assets/data/skiCentersData";
// Components
import { PickerFormInput } from "../../components/PickerInput";
import CalendarForReservation from "../../components/Calendar";

const days = [
  {
    label: "Monday",
  },
  {
    label: "Tuesday",
  },
  {
    label: "Wednesday",
  },
  {
    label: "Thursday",
  },
  {
    label: "Friday",
  },
];

const lines = [
  {
    label: "Linea 1",
  },
  {
    label: "Linea 2",
  },
  {
    label: "Linea 3",
  },
  {
    label: "Linea 4",
  },
  {
    label: "Linea 5",
  },
];
const horarios = [
  {
    label: "9:00 - 12:00",
  },
  {
    label: "12:30 - 3:30",
  },
];

const SkiCenterDetailsScreen = ({ navigation, route }) => {
  // State
  const [lineSelected, setLineSelected] = useState(0);
  const [nAtletasSelected, setnAtletasSelected] = useState(1);
  const [horariosSelected, setHorariosSelected] = useState(0);

  // const { name, id } = route.params;
  // const skiCenterSelected = SKI_CENTERS_DATA.find((item) => item.id === id);

  const handleFilter = (e) => {
    setLineSelected(e);
  };

  return (
    <ScrollView>
      {/* <Image
        source={{ uri: skiCenterSelected.slopesLinesImgUrl }}
        style={{
          width: 300,
          height: 300,
          alignSelf: "center",
          borderRadius: 20,
        }}
      /> */}

      <CalendarForReservation />
    </ScrollView>
  );
};

export default SkiCenterDetailsScreen;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
