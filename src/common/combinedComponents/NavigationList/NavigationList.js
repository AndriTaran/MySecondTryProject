import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import PushNotification, { Importance } from "react-native-push-notification";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreenMain from "../../../Screens/Homescreen/HomeScreenMain";
import CameraScreen from "../../../Screens/CameraScreen/CameraScreen";
import MapsScreen from "../../../Screens/MapScreen/MapsScreen";
import AuthorizationScreen from "../../../Screens/AuthorizationScreen/AuthorizationScreen";
import BarcodeScreen from "../../../Screens/BarcodeScreen/BarcodeScreen";
import WebViewScreen from "../../../Screens/WebViewScreen/WebViewScreen";
import ChartScreen from "../../../Screens/ChartScreen/ChartScreen";
import NotificationScreen from "../../../Screens/NotificationScreen/NotificationScreen";

const Drawer = createDrawerNavigator();

const NavigationList = () => {
   const navigation = useNavigation()
   const goToPage = ( notification ) => {
      navigation.navigate(notification.data.screen)
   }
   useEffect(() => {
      PushNotification.configure({
         onNotification: function(notification) {
            goToPage(notification)
         },
         popInitialNotification: true,
         requestPermissions: true
      }, )
      PushNotification.createChannel(
         {
            channelId: "default-channel-id", // (required)
            channelName: `Default channel`, // (required)
            channelDescription: "A default channel", // (optional) default: undefined.
            soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
         },
         (created) => console.log(`createChannel 'default-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
      );
      PushNotification.createChannel(
         {
            channelId: "sound-channel-id", // (required)
            channelName: `Sound channel`, // (required)
            channelDescription: "A sound channel", // (optional) default: undefined.
            soundName: "sample.mp3", // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
         },
         (created) => console.log(`createChannel 'sound-channel-id' returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
      );

   }, []);

   return (
      <Drawer.Navigator initialRouteName="LOGIN" screenOptions={{
         headerShown: false,
      }}>
         <Drawer.Screen name="Home" component={HomeScreenMain} />
         <Drawer.Screen name="Camera" component={CameraScreen} />
         <Drawer.Screen name="Maps" component={MapsScreen} />
         <Drawer.Screen name="LOGIN" component={AuthorizationScreen} />
         <Drawer.Screen name="BarcodeScreen" component={BarcodeScreen} />
         <Drawer.Screen name='WebViewScreen' component={WebViewScreen}/>
         <Drawer.Screen name="Chart" component={ChartScreen}/>
         <Drawer.Screen name='Notification' component={NotificationScreen}/>
      </Drawer.Navigator>
   );
};

export default NavigationList;
