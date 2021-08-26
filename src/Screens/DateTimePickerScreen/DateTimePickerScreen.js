import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView, Button, View, Text } from "../../common/simpleComponents/";

const DateTimePickerScreen = () => {
  const [pickerMode, setPickerMode] = useState(null);

  const showDatePicker = () => setPickerMode("date");

  const showTimePicker = () => setPickerMode("time");

  const showDateTimePicker = () => setPickerMode("datetime");

  const hidePicker = () => setPickerMode(null);

  const handleConfirm = (date) => {
    hidePicker();
    console.warn("A date has been picked: ", date);
  };

  return (
    <SafeAreaView flex={1}>
      <View flex={1} justifyContent={"center"}>
        <Button
          onPress={showDatePicker}
          bc={"lightblue"}
          width={"50%"}
          mb={"5px"}
        >
          <Text margin={"10px"}>
            Show Date Picker
          </Text>
        </Button>
        <Button
          onPress={showTimePicker}
          bc={"lightblue"}
          width={"50%"}
          mb={"5px"}
        >
          <Text margin={"10px"}>
            Show Time Picker
          </Text>
        </Button>
        <Button
          onPress={showDateTimePicker}
          bc={"lightblue"}
          width={"50%"}
          mb={"5px"}
        >
          <Text margin={"10px"}>
            Show DateTime Picker
          </Text>
        </Button>
        <DateTimePickerModal
          isVisible={pickerMode !== null}
          mode={pickerMode}
          onConfirm={handleConfirm}
          onCancel={hidePicker}
          display={"inline"}
        />
      </View>
    </SafeAreaView>
  );
};

export default DateTimePickerScreen;
