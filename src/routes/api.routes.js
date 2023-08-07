// src/routes/films.routes.js
import express from "express";
const router = express.Router();

// Importa el controlador adecuado para Films (crear, leer, actualizar, borrar)
import {
  createFilm,
  getFilms,
  getFilmById,
  updateFilm,
  deleteFilm,
} from "../../controllers/filmsController.js";

router.post("/", createFilm);
router.get("/", getFilms);
router.get("/:id", getFilmById);
router.put("/:id", updateFilm);
router.delete("/:id", deleteFilm);

export default router;
