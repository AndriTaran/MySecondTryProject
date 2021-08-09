import { ADD_PHOTO, FETCH_PHOTO, DELETE_PHOTO } from "./types";
import CameraRoll from "@react-native-community/cameraroll";

export function fetchPhoto() {
  return async dispatch => {
    CameraRoll.getPhotos({
      first: 1000,
      assetType: "Photos",
    })
      .then(r => {
        dispatch({ type: FETCH_PHOTO, payload: r.edges });
      });
  };
}
