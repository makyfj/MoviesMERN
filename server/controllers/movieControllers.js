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
