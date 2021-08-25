import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import PushNotification, { Importance } from "react-native-push-notification";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HomeScreenMain, SignatureScreen,
  ChartScreen, MapsScreen,
  CameraScreen, AuthorizationScreen,
  BarcodeScreen, WebViewScreen,
  NotificationScreen,
} from "../../../Screens/";


const Drawer = createDrawerNavigator();

const NavigationList = () => {
  const navigation = useNavigation();
  const goToPage = (notification) => {
    navigation.navigate(notification.data.screen);
  };
  useEffect(() => {
    PushNotification.configure({
      onNotification: (notification) => {
        goToPage(notification);
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
    PushNotification.createChannel(
      {
        channelId: "default-channel-id",
        channelName: `Default channel`,
        channelDescription: "A default channel",
        soundName: "default",
        importance: Importance.HIGH,
        vibrate: true,
      },
    );
    PushNotification.createChannel(
      {
        channelId: "sound-channel-id",
        channelName: `Sound channel`,
        channelDescription: "A sound channel",
        soundName: "sample.mp3",
        importance: Importance.HIGH,
        vibrate: true,
      },
    );

  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="LOGIN"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Home" component={HomeScreenMain} />
      <Drawer.Screen name="Camera" component={CameraScreen} />
      <Drawer.Screen name="Maps" component={MapsScreen}  />
      <Drawer.Screen name="LOGIN" component={AuthorizationScreen} />
      <Drawer.Screen name="BarcodeScreen" component={BarcodeScreen} />
      <Drawer.Screen name="WebViewScreen" component={WebViewScreen} />
      <Drawer.Screen name="Chart" component={ChartScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Signature" component={SignatureScreen} />
    </Drawer.Navigator>
  );
};

export default NavigationList;
