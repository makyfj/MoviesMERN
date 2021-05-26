import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import movies from "./images/movies.svg";
import Movies from "./components/Movies/Movies";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getMovies } from "./actions/moviesActions";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getMovies());
  }, [currentId, dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Movies
          </Typography>
          <img src={movies} alt="movies" height="80" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Movies setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
