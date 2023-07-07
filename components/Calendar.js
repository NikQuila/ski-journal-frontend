import { useEffect, useState } from "react";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Text } from "@rneui/base";
// Redux
import { useSelector } from "react-redux";
import { selectCurrentUserFB } from "../store/userFB/userFB.selector";
// Componets
import DayCalendar from "./DayCalendar";
import TextWithDotCircle from "./TextWithDotCircle";
// utils
import months from "../utils/months";
import colors from "../utils/colors";
import { giveMeTheDate } from "../utils/giveMeTheDate";
import fonts from "../utils/fonts";

const CalendarForReservation = () => {
  const [dateSelected, setDateSelected] = useState(giveMeTheDate(true));
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [markedDates, setMarkedDates] = useState({});
  const userFB = useSelector(selectCurrentUserFB);
  const handleDaySelected = (event) => {
    setDateSelected(event.dateString);
  };

  const setObjectForCalendar = () => {
    const myObjectForDates = {};
    console.log(userFB.dailyData);
    userFB.dailyData.map((item) => {
      let colorForDate;
      if (item.discipline === "SL") {
        colorForDate = colors.slColor;
      } else if (item.discipline === "GS") {
        colorForDate = colors.gsColor;
      } else if (item.discipline === "SG") {
        colorForDate = colors.sgColor;
      } else if (item.discipline === "DH") {
        colorForDate = colors.dhColor;
      } else if (item.discipline === "FS") {
        colorForDate = colors.fsColor;
      }
      myObjectForDates[item.dateForCalendar] = {
        selected: true,
        selectedColor: colorForDate,
        marked: true,
      };
    });
    const objectForVideo = {
      ...myObjectForDates,
      "2023-02-01": {
        selected: true,
        selectedColor: colors.slColor,
        marked: true,
      },
      "2023-02-02": {
        selected: true,
        selectedColor: colors.slColor,
        marked: true,
      },
      "2023-02-03": {
        selected: true,
        selectedColor: colors.slColor,
        marked: true,
      },
      "2023-02-05": {
        selected: true,
        selectedColor: colors.gsColor,
        marked: true,
      },
      "2023-02-06": {
        selected: true,
        selectedColor: colors.gsColor,
        marked: true,
      },
      "2023-02-07": {
        selected: true,
        selectedColor: colors.gsColor,
        marked: true,
      },
      "2023-02-08": {
        selected: true,
        selectedColor: colors.gsColor,
        marked: true,
      },
      "2023-02-10": {
        selected: true,
        selectedColor: colors.sgColor,
        marked: true,
      },
      "2023-02-11": {
        selected: true,
        selectedColor: colors.sgColor,
        marked: true,
      },
      "2023-02-12": {
        selected: true,
        selectedColor: colors.sgColor,
        marked: true,
      },
      "2023-02-13": {
        selected: true,
        selectedColor: colors.sgColor,
        marked: true,
      },
      "2023-02-15": {
        selected: true,
        selectedColor: colors.dhColor,
        marked: true,
      },
      "2023-02-16": {
        selected: true,
        selectedColor: colors.dhColor,
        marked: true,
      },
      "2023-02-17": {
        selected: true,
        selectedColor: colors.dhColor,
        marked: true,
      },
      "2023-02-18": {
        selected: true,
        selectedColor: colors.dhColor,
        marked: true,
      },
      "2023-02-20": {
        selected: true,
        selectedColor: colors.slColor,
        marked: true,
      },
      "2023-02-21": {
        selected: true,
        selectedColor: colors.slColor,
        marked: true,
      },
      "2023-02-22": {
        selected: true,
        selectedColor: colors.gsColor,
        marked: true,
      },
      "2023-02-23": {
        selected: true,
        selectedColor: colors.gsColor,
        marked: true,
      },
    };
    // console.log(objectForVideo);
    // setMarkedDates(objectForVideo);
    setMarkedDates(myObjectForDates);
    // console.log(myObjectForDates);
  };
  useEffect(() => {
    setObjectForCalendar();
  }, []);
  return (
    <View>
      <Calendar
        theme={{
          calendarBackground: colors.navBackgroundColor,
          dayTextColor: "white",
          textDisabledColor: "#6a6a6a",
        }}
        style={{ margin: 20, borderRadius: 10, backgroundColor: "#2c3d62" }}
        onMonthChange={(date) => setSelectedMonth(months[date.month - 1])}
        renderHeader={() => (
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: fonts.textDefault,
            }}
          >
            {selectedMonth}
          </Text>
        )}
        onDayPress={handleDaySelected}
        markedDates={markedDates}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TextWithDotCircle circleColor={colors.slColor} text={"SL"} />
        <TextWithDotCircle circleColor={colors.gsColor} text={"GS"} />
        <TextWithDotCircle circleColor={colors.sgColor} text={"SG"} />
        <TextWithDotCircle circleColor={colors.dhColor} text={"DH"} />
      </View>

      <DayCalendar dateString={dateSelected} />
    </View>
  );
};

export default CalendarForReservation;
