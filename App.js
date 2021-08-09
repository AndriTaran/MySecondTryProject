import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreenMain from "./src/Screens/Homescreen/HomeScreenMain";
import CameraScreen from "./src/Screens/CameraScreen/CameraScreen.js";
import Test from "./src/assets/testswipe";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./src/redux/reducers/rootReducer";
import thunk from "redux-thunk";

const Drawer = createDrawerNavigator();
const store = createStore(rootReducer, compose(applyMiddleware(
  thunk,
)));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false,
        }}>
          <Drawer.Screen name="Home" component={HomeScreenMain} />
          <Drawer.Screen name="Camera" component={CameraScreen} />
          <Drawer.Screen name="TEST" component={Test} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
