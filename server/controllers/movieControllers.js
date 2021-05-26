import Movie from "../models/movieModel.js";
import mongoose from "mongoose";
import asyncHandler from "express-async-handler";

// express-async-handler instead of try/catch

// @desc Fetch all movies
// @route GET /api/movies
// @access Public
export const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

// @desc Create a product
// @route POST /api/movies
// @access Public
export const createMovie = asyncHandler(async (req, res) => {
  const movie = req.body;

  const newMovie = new Movie(movie);

  const createdMovie = await newMovie.save();
  res.status(201).json(createdMovie);
});

export const updateMovie = asyncHandler(async (req, res) => {
  // get id
  const { id: _id } = req.params;
  const movie = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedMovie = await Movie.findByIdAndUpdate(
    _id,
    { ...movie, _id },
    { new: true }
  );

  res.json(updatedMovie);
});
