import React, { useState } from "react";
import { Button, Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PickerFormInput } from "./PickerInput";
// utils
import disciplines from "../utils/disciplines";
import snowConidtions from "../utils/snowConditions";
import colors from "../utils/colors";

const DialogFormDaily = ({ title }) => {
  const [visible1, setVisible1] = useState(false);
  const [checked, setChecked] = useState(1);
  // states input
  const [disciplineSel, setDisciplineSel] = useState(0);
  const [nTurnsSel, setNTurnsSel] = useState(30);
  const [nRunsSel, setNRunsSel] = useState(4);
  const [placeSel, setPlaceSel] = useState("Pozza di Fassa");
  const [snowConidtionsSel, setSnowConditionsSel] = useState(2);
  const [sentationsSel, setSensationsSel] = useState("");

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

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
        onPress={toggleDialog1}
      />

      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <ScrollView style={{ height: "80%" }}>
          <Dialog.Title title="Form For Daily Journal" />
          <PickerFormInput
            selected={disciplineSel}
            fn={setDisciplineSel}
            items={disciplines}
            label={"Discipline"}
          />
          <PickerFormInput
            selected={nTurnsSel}
            fn={setNTurnsSel}
            label={"Course Turns"}
            isWrite
          />
          <PickerFormInput
            selected={nRunsSel}
            fn={setNRunsSel}
            label={"N° Runs in Course"}
            isWrite
          />

          <PickerFormInput
            selected={placeSel}
            fn={setPlaceSel}
            label={"Place of training"}
            isWrite
            isText
          />
          <PickerFormInput
            selected={snowConidtionsSel}
            fn={setSnowConditionsSel}
            items={snowConidtions}
            label={"Snow Conditions"}
          />
          <PickerFormInput
            selected={sentationsSel}
            fn={setSensationsSel}
            label={"Sensations about the day"}
            isWrite
            isText
          />
          <Button
            title={"Upload Photo of the day"}
            containerStyle={{ borderRadius: 10, marginTop: 10 }}
            buttonStyle={{
              backgroundColor: "white",
            }}
            titleStyle={{ color: colors.appColor }}
          />
          <Button
            title={"Submit"}
            containerStyle={{
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={toggleDialog1}
          />
        </ScrollView>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
  },
  buttonContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DialogFormDaily;
