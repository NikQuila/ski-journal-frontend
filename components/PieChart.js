import { LineChart, PieChart } from "react-native-gifted-charts";
import { View, Text } from "react-native";
import { Card } from "@rneui/base";
// utils
import { dataChartDisciplines } from "../utils/dataChartsDisciplines";
import fonts from "../utils/fonts";

const PieChartSki = ({ slValue, gsValue, sgValue, dhValue, fsValue }) => {
  dataChartDisciplines[0].value = slValue;
  dataChartDisciplines[1].value = gsValue;
  dataChartDisciplines[2].value = sgValue;
  dataChartDisciplines[3].value = dhValue;
  dataChartDisciplines[3].value = fsValue;

  const total = slValue + gsValue + sgValue + dhValue + fsValue;
  console.log(total);
  dataChartDisciplines[0].text = `${Math.round((slValue / total) * 100)} %`;
  dataChartDisciplines[1].text = `${Math.round((gsValue / total) * 100)} %`;
  dataChartDisciplines[2].text = `${Math.round((sgValue / total) * 100)} %`;
  dataChartDisciplines[3].text = `${Math.round((dhValue / total) * 100)} %`;

  return (
    <View>
      <Card containerStyle={{ borderRadius: 10 }}>
        <Text
          style={{
            fontFamily: fonts.textTitle,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          {" "}
          Ski Days
        </Text>
        <Card.Divider />
        <View style={{ paddingLeft: 20 }}>
          <PieChart
            radius={100}
            nox
            showText={true}
            donut
            data={dataChartDisciplines}
            setSelectedIndex={0}
            selectedIndex={0}
            // fontStyle={"dyna-puff-regular"}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {dataChartDisciplines.map((item) => (
            <LabelForPie key={item.key} label={item.label} color={item.color} />
          ))}
        </View>
      </Card>
    </View>
  );
};

export default PieChartSki;

const LabelForPie = ({ label, color }) => {
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={{ backgroundColor: color, padding: 8 }}></View>
      <Text style={{ fontFamily: fonts.textDefault }}>{label}</Text>
    </View>
  );
};
