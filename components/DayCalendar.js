import { Card, Text, Divider } from "@rneui/base";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
// Redux
import { useSelector } from "react-redux";
import { selectCurrentUserFB } from "../store/userFB/userFB.selector";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import { changeYearForDaysOrder } from "../utils/giveMeTheDate";
// Components
import FriendFeedCard from "./FriendFeedCard";

const DayCalendar = ({ dateString }) => {
  const userFB = useSelector(selectCurrentUserFB);
  const [journalDay, setJournalDay] = useState({});

  const setJournalDayWithDateString = () => {
    console.log(dateString);
    const found = userFB.dailyData.find(
      (element) => element.dateForCalendar == dateString
    );
    console.log(found);
    if (found) {
      setJournalDay(found);
    } else {
      setJournalDay({});
    }
  };
  useEffect(() => {
    setJournalDayWithDateString();
  }, [dateString]);
  return (
    <View style={{ marginBottom: 15 }}>
      <Text
        style={{
          fontFamily: fonts.textDefault,
          color: colors.textDefaultColor,
          textAlign: "center",
          fontSize: 18,
          marginVertical: 20,
        }}
      >
        Your Journal from {changeYearForDaysOrder(dateString)} ☃️
      </Text>
      <View
        style={{
          alignItems: "center",
        }}
      >
        {journalDay.photoId ? (
          <>
            <FriendFeedCard width={266} cardProps={journalDay} />
            <Text style={styles.textSensations}>Sensations 📕</Text>
            <Text style={styles.textSensations}>{journalDay.sensations}</Text>
          </>
        ) : (
          <Text style={styles.textSensations}>
            {" "}
            No Journal register for that day :(
          </Text>
        )}
      </View>
    </View>
  );
};

export default DayCalendar;

const styles = StyleSheet.create({
  textSensations: {
    marginHorizontal: 45,
    marginTop: 5,
    fontFamily: fonts.textDefault,
    color: colors.textDefaultColor,
  },
});
