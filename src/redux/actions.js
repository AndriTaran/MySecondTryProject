import { ADD_PHOTO, GET_PHOTO, DELETE_PHOTO } from "./types";

export function getPhoto() {
  return dispatch => dispatch({ type: GET_PHOTO });
}

export function addPhoto(data) {
  console.log('new',data.uri || data.image)
  return dispatch => dispatch({ type: ADD_PHOTO, payload: data });
}
