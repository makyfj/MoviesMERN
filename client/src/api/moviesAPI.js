import axios from "axios";

const url = "http://localhost:5000/api/movies";

export const fetchMovies = () => axios.get(url);
