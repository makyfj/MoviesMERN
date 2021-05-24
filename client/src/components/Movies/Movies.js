import React from "react";
import Movie from "./Movie/Movie";
import useStyles from "./styles";
import { useSelector } from "react-redux";

const Movies = () => {
  const classes = useStyles();
  const movies = useSelector((state) => state.movies);
  console.log(movies);
  return (
    <>
      <h1>MOVIES</h1>
      <Movie />
      <Movie />
    </>
  );
};

export default Movies;
