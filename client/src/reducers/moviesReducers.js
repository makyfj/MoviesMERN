import {
  FETCH_ALL,
  CREATE_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  LIKE_MOVIE,
} from "../constants/moviesConstants";

export const movies = (movies = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE_MOVIE:
      return [...movies, action.payload];
    case LIKE_MOVIE:
    case UPDATE_MOVIE:
      return movies.map((movie) =>
        movie._id === action.payload._id ? action.payload : movie
      );
    case DELETE_MOVIE:
      return movies.filter((movie) => movie._id !== action.payload);
    default:
      return movies;
  }
};
