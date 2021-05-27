import React from "react";
import moment from "moment";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteMovie, likeMovie } from "../../../actions/moviesActions";
import { useDispatch } from "react-redux";

const Movie = ({ movie, setCurrentId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={movie.selectedFile}
        title={movie.title}
        src={movie.selectedFile}
        component="div"
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{movie.director}</Typography>
        <Typography variant="body2">
          {moment(movie.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(movie._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.language}>
        <Typography variant="body1" color="textSecondary">
          {movie.language}
        </Typography>
      </div>
      <div className={classes.language}>
        <Typography variant="body1" color="textSecondary">
          {movie.actors}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" align="center">
          {movie.title}
        </Typography>
        <Typography color="textSecondary" variant="body2" gutterBottom>
          {movie.description}
        </Typography>
        <Typography color="textSecondary" variant="body2" gutterBottom>
          {movie.year}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likeMovie(movie._id))}
        >
          <ThumbUpAltIcon />
          Like {movie.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteMovie(movie._id))}
        >
          <DeleteIcon />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Movie;
