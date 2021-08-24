import React from "react";
import { localNotification, scheduledLocalNotification } from "../../services/Notification/LocalPushController";
import { View, Text, Button } from "../../common/simpleComponents";

const NotificationScreen = () => {

  const handlePressLocalSilent = () => localNotification();
  const handlePressLocal = () => localNotification("sample.mp3");
  const handlePressScheduleSilent = () => scheduledLocalNotification();
  const handlePressSchedule = () => scheduledLocalNotification("sample.mp3");

  return (
    <View flex={1} justifyContent={"center"}>
      <Text fontSize={"20px"} mb={"20px"}>
        Example app react-native-push-notification
      </Text>
      <Button
        border={"1px solid black"}
        margin={"5px"}
        padding={"5px"}
        backgroundColor={"#AAAAAA"}
        borderRadius={"5px"}
        width={"70%"}
        onPress={handlePressLocalSilent}
      >
        <Text>Local Notification (now)</Text>
      </Button>
      <Button
        border={"1px solid black"}
        margin={"5px"}
        padding={"5px"}
        backgroundColor={"#AAAAAA"}
        borderRadius={"5px"}
        width={"70%"}
        onPress={handlePressLocal}
      >
        <Text>Local Notification with sound (now)</Text>
      </Button>
      <Button
        border={"1px solid black"}
        margin={"5px"}
        padding={"5px"}
        backgroundColor={"#AAAAAA"}
        borderRadius={"5px"}
        width={"70%"}
        onPress={handlePressScheduleSilent}
      >
        <Text>Schedule Notification in 30s</Text>
      </Button>
      <Button
        border={"1px solid black"}
        margin={"5px"}
        padding={"5px"}
        backgroundColor={"#AAAAAA"}
        borderRadius={"5px"}
        width={"70%"}
        onPress={handlePressSchedule}
      >
        <Text>Schedule Notification with sound in 30s</Text>
      </Button>
    </View>
  );
};

export default NotificationScreen;
