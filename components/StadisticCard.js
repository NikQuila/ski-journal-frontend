import { Text } from "@rneui/base";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const StadisticCard = ({ label, value, backgroundColor, iconName }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      flex: 1,
      margin: 15,
      alignItems: "center",
      borderRadius: 10,
      minHeight: 150,
    },
    icon: {
      marginTop: 10,
      backgroundColor: "rgba(238, 221, 221, 0.39)",
      borderRadius: 30,
      padding: 10,
    },
    valueText: {
      marginTop: 10,
    },
    labelText: {
      marginBottom: 10,
    },
  });
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} style={styles.icon} size={40} />
      <Text style={styles.valueText} h4 h4Style={{ fontSize: 20 }}>
        {value}
      </Text>
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );
};

export default StadisticCard;
