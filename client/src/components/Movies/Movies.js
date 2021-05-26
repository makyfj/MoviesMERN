import React from "react";
import Movie from "./Movie/Movie";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Movies = ({ setCurrentId }) => {
  const classes = useStyles();
  const movies = useSelector((state) => state.movies);
  return !movies.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {movies.map((movie) => (
        <Grid item key={movie._id} xs={12} sm={5}>
          <Movie movie={movie} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Movies;
