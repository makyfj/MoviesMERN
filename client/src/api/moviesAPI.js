import axios from "axios";

const url = "http://localhost:5000/api/movies";

export const fetchMovies = () => axios.get(url);
export const createMovie = (newMovie) => axios.post(url, newMovie);
export const updateMovie = (id, updatedMovie) =>
  axios.patch(`${url}/${id}`, updatedMovie);
