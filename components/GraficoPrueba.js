import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import { View, Text } from "react-native";
import colors from "../utils/colors";
import { Card } from "@rneui/base";

const GraficoPrueba = () => {
  const data = [
    {
      key: 1,
      value: 50,
      label: "GS",
      frontColor: colors.gsColor,
      text: "18%",
      labelPosition: "outward",
      color: colors.gsColor,
      textColor: "white",
      fontWeight: "bold",
    },
    {
      key: 2,
      value: 80,
      label: "SL",
      frontColor: colors.slColor,
      text: "30%",
      labelPosition: "outward",
      color: colors.slColor,
      textColor: "white",
      fontWeight: "bold",
    },
    {
      key: 3,
      value: 90,
      label: "SG",
      frontColor: colors.sgColor,
      text: "35%",
      labelPosition: "outward",
      color: colors.sgColor,
      textColor: "white",
      fontWeight: "bold",
    },
    {
      key: 4,
      value: 70,
      label: "DH",
      frontColor: colors.dhColor,
      text: "23%",
      labelPosition: "outward",
      color: colors.dhColor,
      textColor: "white",
      fontWeight: "bold",
    },
  ];

  const data2 = [
    {
      key: 5,
      value: 8,
      label: "Pozza",
      text: "18%",
      labelPosition: "outward",
      textColor: "white",
      fontWeight: "bold",
    },
    {
      key: 6,
      value: 6,
      label: "Buffaure",
      text: "30%",
      labelPosition: "outward",
      textColor: "white",
      fontWeight: "bold",
    },
    {
      key: 7,
      value: 5,
      label: "Alpe Cermis",
      text: "35%",
      labelPosition: "outward",
      textColor: "white",
      fontWeight: "bold",
    },
    {
      key: 8,
      value: 10,
      label: "Folgaria",
      text: "23%",
      labelPosition: "outward",
      textColor: "white",
      fontWeight: "bold",
    },
  ];

  return (
    <View>
      <Card containerStyle={{ borderRadius: 10 }}>
        <Card.Title>Ski Days</Card.Title>
        <Card.Divider />
        <BarChart
          data={data}
          initialSpacing={20}
          noOfSections={5}
          isAnimated
          roundedTop
        />
      </Card>

      <Card containerStyle={{ borderRadius: 10 }}>
        <Card.Title>Ski days</Card.Title>
        <Card.Divider />
        <View style={{ flexDirection: "row" }}>
          {/* <PieChart
            data={data}
            donut
            radius={100}
            showText
            showValuesAsLabels={true}
          /> */}
          <View style={{ marginTop: 40 }}>
            {data.map((item) => (
              <LabelForPie
                key={item.key}
                label={item.label}
                color={item.color}
              />
            ))}
          </View>
        </View>
      </Card>
      <Card containerStyle={{ borderRadius: 10 }}>
        <Card.Title>Ski Days</Card.Title>
        <Card.Divider />
        <View style={{ marginLeft: 50 }}>
          {/* <BarChart
            horizontal
            data={data2}
            initialSpacing={20}
            noOfSections={3}
            isAnimated
            frontColor={colors.appColor}
            roundedTop
          /> */}
        </View>
      </Card>
    </View>
  );
};

const LabelForPie = ({ label, color }) => {
  return (
    <View style={{ flexDirection: "row", padding: 5 }}>
      <View style={{ backgroundColor: color, padding: 8 }}></View>
      <Text style={{ marginLeft: 5 }}>{label}</Text>
    </View>
  );
};
export default GraficoPrueba;
