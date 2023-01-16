import { useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Text } from "@rneui/base";
// Componets
import DayCalendar from "./DayCalendar";
import TextWithDotCircle from "./TextWithDotCircle";
import colors from "../utils/colors";

const CalendarForReservation = () => {
  const [dateSelected, setDateSelected] = useState("2022-15-20");

  const handleDaySelected = (event) => {
    setDateSelected(event.dateString);
  };
  return (
    <View>
      <Calendar
        style={{ margin: 20, borderRadius: 10 }}
        onDayPress={handleDaySelected}
        markedDates={{
          "2023-01-01": {
            selected: true,
            selectedColor: colors.slColor,
            marked: true,
          },
          "2023-01-02": {
            selected: true,
            selectedColor: colors.slColor,
            marked: true,
          },
          "2023-01-03": {
            selected: true,
            selectedColor: colors.slColor,
            marked: true,
          },
          "2023-01-05": {
            selected: true,
            selectedColor: colors.gsColor,
            marked: true,
          },
          "2023-01-06": {
            selected: true,
            selectedColor: colors.gsColor,
            marked: true,
          },
          "2023-01-07": {
            selected: true,
            selectedColor: colors.gsColor,
            marked: true,
          },
          "2023-01-08": {
            selected: true,
            selectedColor: colors.gsColor,
            marked: true,
          },
          "2023-01-10": {
            selected: true,
            selectedColor: colors.sgColor,
            marked: true,
          },
          "2023-01-11": {
            selected: true,
            selectedColor: colors.sgColor,
            marked: true,
          },
          "2023-01-12": {
            selected: true,
            selectedColor: colors.sgColor,
            marked: true,
          },
          "2023-01-13": {
            selected: true,
            selectedColor: colors.sgColor,
            marked: true,
          },
          "2023-01-15": {
            selected: true,
            selectedColor: colors.dhColor,
            marked: true,
          },
          "2023-01-16": {
            selected: true,
            selectedColor: colors.dhColor,
            marked: true,
          },
          "2023-01-17": {
            selected: true,
            selectedColor: colors.dhColor,
            marked: true,
          },
          "2023-01-18": {
            selected: true,
            selectedColor: colors.dhColor,
            marked: true,
          },
          "2023-01-19": {
            selected: true,
            selectedColor: colors.dhColor,
            marked: true,
          },
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TextWithDotCircle circleColor={colors.gsColor} text={"GS"} />
        <TextWithDotCircle circleColor={colors.slColor} text={"SL"} />
        <TextWithDotCircle circleColor={colors.sgColor} text={"SG"} />
        <TextWithDotCircle circleColor={colors.dhColor} text={"DH"} />
      </View>

      <DayCalendar dateString={dateSelected} />
    </View>
  );
};

export default CalendarForReservation;
