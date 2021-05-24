import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  title: String,
  director: String,
  description: String,
  language: String,
  actors: [String],
  year: String,
  selectedFile: String, // for image selection
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
