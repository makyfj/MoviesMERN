import express from "express";
import {
  getMovies,
  createMovie,
  updateMovie,
} from "../controllers/movieControllers.js";

const router = express.Router();

router.get("/", getMovies);
router.post("/", createMovie);
router.patch("/:id", updateMovie);

export default router;
