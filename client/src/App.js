import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import movies from "./images/movies.svg";
import Movies from "./components/Movies/Movies";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
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
                <Movies />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
