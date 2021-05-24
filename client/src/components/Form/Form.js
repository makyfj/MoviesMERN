import React, { useState } from "react";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createMovie } from "../../actions/moviesActions";

const Form = () => {
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

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createMovie(movieData));
  };

  const handleClear = () => {
    console.log("Clear");
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Movie</Typography>
        <TextField
          name="director"
          variant="outlined"
          label="Director"
          fullWidth
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
          onClick={handleClear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
