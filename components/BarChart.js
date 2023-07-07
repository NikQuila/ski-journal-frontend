import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { View, Text } from "react-native";
import { Card } from "@rneui/base";
// utils
import { dataChartDisciplines } from "../utils/dataChartsDisciplines";

const BarChartSki = ({ slValue, gsValue, sgValue, dhValue }) => {
  dataChartDisciplines[0].value = slValue;
  dataChartDisciplines[1].value = gsValue;
  dataChartDisciplines[2].value = sgValue;
  dataChartDisciplines[3].value = dhValue;

  return (
    <View>
      <Card containerStyle={{ borderRadius: 10 }}>
        <Card.Title>Ski Days</Card.Title>
        <Card.Divider />
        <BarChart
          data={dataChartDisciplines}
          initialSpacing={20}
          noOfSections={5}
          isAnimated
          roundedTop
        />
      </Card>
    </View>
  );
};

export default BarChartSki;
