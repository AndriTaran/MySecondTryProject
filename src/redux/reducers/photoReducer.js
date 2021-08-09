import { ADD_PHOTO, DELETE_PHOTO, FETCH_PHOTO } from "../types";


const initialState = {
  photos: []
}

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTO:
      return {...state, photos: state.photos = action.payload}
    case ADD_PHOTO:
      return {...state, photos: state.photos.concat(action.payload)}
    case DELETE_PHOTO:
      return {...state, photos: state.photos.filter((photo, index) => index !== action.payload)}
    default:
      return state
  }
}
