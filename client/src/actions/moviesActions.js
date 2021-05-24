import * as api from "../api/moviesAPI";
import { FETCH_ALL, CREATE_MOVIE } from "../constants/moviesConstants";

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

export const createMovie = ({ movie }) => async (dispatch) => {
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
