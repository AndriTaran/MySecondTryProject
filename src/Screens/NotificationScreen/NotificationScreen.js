import React from "react";
import { localNotification, scheduledLocalNotification } from "../../services/Notification/LocalPushController";
import { Block, Text, Button } from "../../common/simpleComponents";

const NotificationScreen = () => {

   return (
      <Block flex={1} justifyContent={'center'}>
         <Text fontSize={'20px'} mb={'20px'}>
            Example app react-native-push-notification
         </Text>
         <Button
            border={'1px solid black'}
            margin={'5px'}
            padding={'5px'}
            backgroundColor={'#AAAAAA'}
            borderRadius={'5px'}
            width={"70%"}
            onPress={() => localNotification()}>
            <Text>Local Notification (now)</Text>
         </Button>
         <Button
            border={'1px solid black'}
            margin={'5px'}
            padding={'5px'}
            backgroundColor={'#AAAAAA'}
            borderRadius={'5px'}
            width={"70%"}
            onPress={() => localNotification("sample.mp3")}>
            <Text>Local Notification with sound (now)</Text>
         </Button>
         <Button
            border={'1px solid black'}
            margin={'5px'}
            padding={'5px'}
            backgroundColor={'#AAAAAA'}
            borderRadius={'5px'}
            width={"70%"}
            onPress={() =>
               scheduledLocalNotification()
            }>
            <Text>Schedule Notification in 30s</Text>
         </Button>
         <Button
            border={'1px solid black'}
            margin={'5px'}
            padding={'5px'}
            backgroundColor={'#AAAAAA'}
            borderRadius={'5px'}
            width={"70%"}
            onPress={() => scheduledLocalNotification("sample.mp3")}>
            <Text>Schedule Notification with sound in 30s</Text>
         </Button>

      </Block>
   );
};


export default NotificationScreen;
