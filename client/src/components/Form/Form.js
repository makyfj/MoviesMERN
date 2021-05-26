import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createMovie, updateMovie } from "../../actions/moviesActions";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();

  const [movieData, setMovieData] = useState({
    director: "",
    title: "",
    description: "",
    language: "",
    actors: "",
    year: "",
    selectedFile: "",
  });

  const movie = useSelector((state) =>
    currentId ? state.movies.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (movie) {
      setMovieData(movie);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateMovie(currentId, movieData));
    } else {
      dispatch(createMovie(movieData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setMovieData({
      director: "",
      title: "",
      description: "",
      language: "",
      actors: "",
      year: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Movie
        </Typography>
        <TextField
          name="director"
          variant="outlined"
          label="Director"
          fullWidth
          required={true}
          value={movieData.director}
          onChange={(e) =>
            setMovieData({ ...movieData, director: e.target.value })
          }
        />

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={movieData.title}
          onChange={(e) =>
            setMovieData({ ...movieData, title: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={movieData.description}
          onChange={(e) =>
            setMovieData({ ...movieData, description: e.target.value })
          }
        />
        <TextField
          name="language"
          variant="outlined"
          label="Language"
          fullWidth
          value={movieData.language}
          onChange={(e) =>
            setMovieData({ ...movieData, language: e.target.value })
          }
        />
        <TextField
          name="actors"
          variant="outlined"
          label="Actors"
          fullWidth
          value={movieData.actors}
          onChange={(e) =>
            setMovieData({ ...movieData, actors: e.target.value })
          }
        />
        <TextField
          name="year"
          variant="outlined"
          label="Year"
          fullWidth
          value={movieData.year}
          onChange={(e) => setMovieData({ ...movieData, year: e.target.value })}
        />
        <div className="classes fileInput">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setMovieData({ ...movieData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
