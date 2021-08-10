import { ADD_PHOTO, DELETE_PHOTO, GET_PHOTO } from "../types";


const initialState = {
  photos: []
}

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTO:
      return {...state, photos: state.photos}
    case ADD_PHOTO:
      return {...state, photos: [action.payload].concat(state.photos)}
    case DELETE_PHOTO:
      return {...state, photos: state.photos.filter((photo, index) => index !== action.payload)}
    default:
      return state
  }
}
