import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./src/redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import CameraScreen from "./src/Screens/CameraScreen/CameraScreen.js";
import HomeScreenMain from "./src/Screens/Homescreen/HomeScreenMain";
import MapsScreen from "./src/Screens/MapScreen/MapsScreen";
import AuthorizationScreen from "./src/Screens/AuthorizationScreen/AuthorizationScreen";
import BarcodeScreen from "./src/Screens/BarcodeScreen/BarcodeScreen";

const Drawer = createDrawerNavigator();
const store = createStore(rootReducer, compose(applyMiddleware(
  thunk,
)));
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="LOGIN" screenOptions={{
            headerShown: false,
          }}>
            <Drawer.Screen name="Home" component={HomeScreenMain} />
            <Drawer.Screen name="Camera" component={CameraScreen} />
            <Drawer.Screen name="Maps" component={MapsScreen} />
            <Drawer.Screen name="LOGIN" component={AuthorizationScreen} />
            <Drawer.Screen name="BarcodeScreen" component={BarcodeScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
