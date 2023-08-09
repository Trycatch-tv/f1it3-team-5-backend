// src/routes/films.routes.js
const express = require("express");
const router = express.Router();
const upload = require('../utils/handleUploadFile')
// Importa el controlador adecuado para Films (crear, leer, actualizar, borrar)
const {
  createFilm,
  getFilms,
  getFilmById,
  updateFilm,
  deleteFilm,
} = require( "../controllers/filmsController.js")
const permiso = require('../utils/handleToken')

router.post("/",upload.single('imagenUrl'), createFilm);
router.get("/", getFilms);
router.get("/:id", getFilmById);
router.put("/:id",upload.single('imagenUrl'), updateFilm);
router.delete("/:id", deleteFilm);
module.exports = router;
