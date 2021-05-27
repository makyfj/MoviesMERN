import express from "express";
import {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  likeMovie,
} from "../controllers/movieControllers.js";

const router = express.Router();

router.get("/", getMovies);
router.post("/", createMovie);
router.patch("/:id", updateMovie);
router.delete("/:id", deleteMovie);
router.patch("/:id/likeMovie", likeMovie);

export default router;
