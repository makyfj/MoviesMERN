import * as api from "../api/moviesAPI";
import { FETCH_ALL } from "../constants/moviesConstants";

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
