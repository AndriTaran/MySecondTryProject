import * as React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./src/redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import NavigationList from "./src/common/combinedComponents/NavigationList/NavigationList";

const store = createStore(rootReducer, compose(applyMiddleware(
   thunk,
)));
const persistor = persistStore(store);

export default function App() {

   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
                  <NavigationList/>
            </NavigationContainer>
         </PersistGate>
      </Provider>
   );
}
