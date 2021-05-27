import * as api from "../api/moviesAPI";
import {
  FETCH_ALL,
  CREATE_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE,
  LIKE_MOVIE,
} from "../constants/moviesConstants";

// Action creators
export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    /* handle error */
    console.log(error);
  }
};

export const createMovie = (movie) => async (dispatch) => {
  try {
    const { data } = await api.createMovie(movie);
    dispatch({
      type: CREATE_MOVIE,
      payload: data,
    });
  } catch (error) {
    /* handle error */
    console.log(error);
  }
};

export const updateMovie = (id, movie) => async (dispatch) => {
  try {
    const { data } = await api.updateMovie(id, movie);
    dispatch({ type: UPDATE_MOVIE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await api.deleteMovie(id);
    dispatch({ type: DELETE_MOVIE, payload: id });
  } catch (error) {
    /* handle error */
    console.log(error);
  }
};

export const likeMovie = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMovie(id);
    dispatch({ type: LIKE_MOVIE, payload: data });
  } catch (error) {
    /* handle error */
    console.log(error);
  }
};
