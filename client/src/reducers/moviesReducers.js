import {
  FETCH_ALL,
  CREATE_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  LIKE_MOVIE,
} from "../constants/moviesConstants";

export const movies = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE_MOVIE:
      return [...state, action.payload];
    default:
      return state;
  }
};
