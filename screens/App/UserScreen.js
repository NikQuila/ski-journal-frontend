import { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
// Redux
import { useSelector } from "react-redux";
import { selectCurrentUserFB } from "../../store/userFB/userFB.selector";
// Components
import UserProfileCard from "../../components/UserProfiileCard";
import StadisticCard from "../../components/StadisticCard";
import colors from "../../utils/colors";
import GraficoPrueba from "../../components/GraficoPrueba";
// Charts
import BarChartSki from "../../components/BarChart";
import PieChartSki from "../../components/PieChart";

const items = [
  {
    id: 0,
    label: "Ski Training Days",
    value: 57,
    backgroundColor: colors.slColor,
    iconName: "calendar-outline",
  },
  {
    id: 1,
    label: "Most Ski Trainings",
    value: "Pozza di Fassa",
    backgroundColor: colors.gsColor,
    iconName: "location-outline",
  },
  {
    id: 2,
    label: "Most Discipline Days",
    value: "GS",
    backgroundColor: colors.sgColor,
    iconName: "heart-outline",
  },
  {
    id: 3,
    label: "Total Turns",
    value: 5,
    backgroundColor: colors.dhColor,
    iconName: "hourglass-outline",
  },
];

const UserScreen = () => {
  const userFB = useSelector(selectCurrentUserFB);
  const [principalDataUser, setPrincipalDataUser] = useState([]);
  const [skiDaysDiscipline, setSkiDaysDiscipline] = useState({
    SL: 0,
    GS: 0,
    SG: 0,
    DH: 0,
    FS: 0,
  });

  const fetchData = async () => {
    console.log(userFB.dailyData.length);
    const objSkiTraining = getPlacesSkiTrainingList(userFB.dailyData);
    const objSkiTrainingPlaces = objSkiTraining[0];
    const objSkiTrainingDisciplines = objSkiTraining[1];
    const totalRuns = objSkiTraining[2];
    const courseTurns = objSkiTraining[3];
    const objMostSkiTrainingPlaces = getMaxKeyAndValueFromObjSkiTraining(
      objSkiTrainingPlaces,
      "placeMoreVisited",
      "timesVisited"
    );
    const objMostSkiTrainingDisciplines = getMaxKeyAndValueFromObjSkiTraining(
      objSkiTrainingDisciplines,
      "mostDisciplineDays",
      "timesTraining"
    );
    items[0].value = userFB.dailyData.length;
    items[1].value = objMostSkiTrainingPlaces.placeMoreVisited;
    items[2].value = objMostSkiTrainingDisciplines.mostDisciplineDays;
    items[3].value = courseTurns;
    setSkiDaysDiscipline(objSkiTrainingDisciplines);
    console.log(objSkiTrainingDisciplines);
    setPrincipalDataUser(items);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <FlatList
      numColumns={2}
      data={principalDataUser}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderItem(item)}
      contentContainerStyle={styles.stadisticList}
      ListHeaderComponent={() => <UserProfileCard />}
      ListFooterComponent={() => (
        <View style={{ alignSelf: "center" }}>
          {/* <GraficoPrueba /> */}
          {/* <BarChartSki
            slValue={skiDaysDiscipline.SL ? skiDaysDiscipline.SL : 0}
            gsValue={skiDaysDiscipline.GS ? skiDaysDiscipline.GS : 0}
            sgValue={skiDaysDiscipline.SG ? skiDaysDiscipline.SG : 0}
            dhValue={skiDaysDiscipline.DH ? skiDaysDiscipline.DH : 0}
          /> */}
          <PieChartSki
            slValue={skiDaysDiscipline.SL ? skiDaysDiscipline.SL : 0}
            gsValue={skiDaysDiscipline.GS ? skiDaysDiscipline.GS : 0}
            sgValue={skiDaysDiscipline.SG ? skiDaysDiscipline.SG : 0}
            dhValue={skiDaysDiscipline.DH ? skiDaysDiscipline.DH : 0}
            fsValue={skiDaysDiscipline.FS ? skiDaysDiscipline.FS : 0}
          />
        </View>
      )}
    />
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  stadisticList: {},
});

const getPlacesSkiTrainingList = (dailyData, key) => {
  const myObjSkiPlaces = {};
  const myObjSkiDisciplines = {};
  let totalRuns = 0;
  let courseTurns = 0;
  dailyData.map((item) => {
    if (myObjSkiPlaces[item.place]) {
      myObjSkiPlaces[item.place] += 1;
    } else {
      myObjSkiPlaces[item.place] = 1;
    }
    if (myObjSkiDisciplines[item.discipline]) {
      myObjSkiDisciplines[item.discipline] += 1;
    } else {
      myObjSkiDisciplines[item.discipline] = 1;
    }
    if (item.totalRuns) {
      totalRuns += parseInt(item.totalRuns);
    }
    if (item.courseTurns) {
      courseTurns += parseInt(item.courseTurns);
    }
  });
  console.log(courseTurns);
  return [myObjSkiPlaces, myObjSkiDisciplines, totalRuns, courseTurns];
};

const getMaxKeyAndValueFromObjSkiTraining = (
  objectSkiTraining,
  label1,
  label2
) => {
  const arrKeysForObjectSkiTraining = Object.keys(objectSkiTraining);
  const arrValuesForObjectSkiTraining = Object.values(objectSkiTraining);
  const maxValue = Math.max(...arrValuesForObjectSkiTraining);
  const index = arrValuesForObjectSkiTraining.indexOf(maxValue);
  // var result = dailyData.find(item => item.)
  const objFinal = {
    [label1]: arrKeysForObjectSkiTraining[index],
    [label2]: arrValuesForObjectSkiTraining[index],
  };
  console.log(objFinal);
  return objFinal;
};
