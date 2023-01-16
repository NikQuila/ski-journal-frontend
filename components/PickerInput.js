import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
// import {
//   BACKGROUND_GRAY_COLOR,
//   PRIMARY_COLOR,
//   LIGHT_TEXT_COLOR,
//   TEXT_COLOR,
// } from "../../../constants/colors";
import Modal from "react-native-modal";

// import { BOLD_FONT, REGULAR_FONT } from "../../../constants/fontsNames";
import { Icon } from "native-base";
import { Button } from "@rneui/base";

export const PickerFormInput = ({
  items,
  selected,
  label,
  fn,
  loadingCallback,
  loadingText,
  callbackResponse,
  footer,
  info,
  isWrite,
  isText,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const selectItem = (index) => {
    fn(index);
    setModalOpen(false);
  };
  const handleTextInput = (e) => {
    fn(e);
  };

  return (
    <View style={styles.input}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {!!label && <Text style={styles.inactiveText}>{label}</Text>}
        {!!info && (
          // <Text>Icono</Text>
          <TouchableOpacity onPress={() => Alert.alert("Información", info)}>
            <Icon
              type="MaterialCommunityIcons"
              style={{ fontSize: 20, color: PRIMARY_COLOR, marginLeft: 5 }}
              name="information-outline"
            />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Text style={styles.inactiveTextInput}>
          {!isWrite ? items[selected].label : selected}
        </Text>
      </TouchableOpacity>
      {!!footer && <Text style={styles.footer}>{footer}</Text>}

      {!!loadingCallback && (
        <View style={{ flexDirection: "row" }}>
          <ActivityIndicator size="small" color={PRIMARY_COLOR} />
          <Text style={{ ...styles.inactiveText, fontSize: 15 }}>
            {loadingText}
          </Text>
        </View>
      )}
      {!!callbackResponse && (
        <Text style={{ ...styles.inactiveText, fontSize: 15 }}>
          {callbackResponse}
        </Text>
      )}

      <Modal isVisible={modalOpen}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {!isWrite ? (
            <>
              {items.map((item, index) => (
                <TouchableOpacity
                  style={styles.modalOptionTouchable}
                  key={index}
                  onPress={() => selectItem(index)}
                >
                  <Text style={styles.modalOption}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </>
          ) : (
            <>
              <TextInput
                style={styles.modalOption}
                keyboardType={!isText ? "number-pad" : "default"}
                onChangeText={handleTextInput}
                placeholder={label}
              />
              <Button
                buttonStyle={{ marginTop: 10 }}
                onPress={() => setModalOpen(false)}
                title={"Accept"}
              />
            </>
          )}
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // flex: 1,
    padding: 10,
    // margin: 10,
  },
  footer: {
    // fontFamily: REGULAR_FONT,
    fontSize: 15,
    // color: TEXT_COLOR,
  },
  inactiveText: {
    // fontFamily: BOLD_FONT,
    fontSize: 20,
    // color: TEXT_COLOR,
  },
  activeText: {
    // fontFamily: BOLD_FONT,
    fontSize: 20,
    // color: PRIMARY_COLOR,
  },
  activeTextInput: {
    marginTop: 5,
    // fontFamily: REGULAR_FONT,
    // color: TEXT_COLOR,
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
    // borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
  },
  inactiveTextInput: {
    marginTop: 5,
    // fontFamily: REGULAR_FONT,
    // color: TEXT_COLOR,
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
    // borderColor: LIGHT_TEXT_COLOR,
    borderWidth: 1,
    borderRadius: 5,
  },
  modalOptionTouchable: {
    backgroundColor: "white",
  },
  modalOption: {
    marginTop: 5,
    // fontFamily: REGULAR_FONT,
    // color: TEXT_COLOR,
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
  },
});
