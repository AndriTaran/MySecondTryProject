import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreenMain from './src/Screens/Homescreen/HomeScreenMain';
import CameraScreen from "./src/Screens/CameraScreen/CameraScreen.js";
import Test from "./src/assets/testswipe";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Drawer.Screen name="Home" component={HomeScreenMain}/>
        <Drawer.Screen name="Camera" component={CameraScreen}/>
        <Drawer.Screen name="TEST" component={Test}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
