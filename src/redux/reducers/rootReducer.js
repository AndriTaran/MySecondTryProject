import { combineReducers } from "redux";
import { photoReducer } from "./photoReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer} from 'redux-persist'

const persistConfig={
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['photos']
}

 export const rootReducer = combineReducers({
  photo: persistReducer(persistConfig, photoReducer)
})
