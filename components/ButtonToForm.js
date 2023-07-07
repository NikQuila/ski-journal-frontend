import { View } from "react-native";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
const ButtonToForm = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        containerStyle={{
          borderRadius: 30,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        title="+"
        titleStyle={{ fontSize: 24, padding: 8 }}
        size="lg"
        onPress={() => navigation.navigate("Daily Form")}
      />
    </View>
  );
};

export default ButtonToForm;
