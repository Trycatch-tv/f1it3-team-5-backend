// src/controllers/filmsController.js
const { body } = require('express-validator');
const prisma = require('../config/db')
const handlerError = require('../utils/handleError')

 const createFilm = async (req, res) => {
 
  try {
    const { FilmName, IdDirector, imagenUrl, IdGenre } = req.body;
 
    if(!req.file) return handlerError(res, error,400)
    const director = IdDirector
    const genre = IdGenre
    const imgUrl = req.file.filename
    const imageUrl = `http://localhost:3000/storage/${imgUrl}`;
   
    const film = await prisma.Films.create({
      data: {
        FilmName,
        IdDirector: parseInt(director),
        imagenUrl: imageUrl,
        IdGenre: parseInt(genre),
      },
    });
    res.send({data:film});
  } catch (error) {
    handlerError(res, error,400);
  }
};

 const getFilms = async (req, res) => {
  try {
    const films = await prisma.Films.findMany(
      {
        include: {
          director: true,
          genre: true,
        }
      }
    );
    res.send({films});
  } catch (error) {
    handlerError(res, error,500);
  }
};

 const getFilmById = async (req, res) => {
  try {
    const { id } = req.params;
    const film = await prisma.Films.findUnique({
      where: { IdFilm: parseInt(id) },
      include: {
        director: true,
        genre: true,
      },
    });
    if (!film) {
      return handlerError(res, "not found",402)
    } else {
      res.send({film});
    }
  } catch (error) {
    return handlerError(res, error,402)
  }
};

 const updateFilm = async (req, res) => {
  try {
    const { id } = req.params;
    const { FilmName, IdDirector, imagenUrl, IdGenre } = req.body;
    const director = IdDirector
    const genre = IdGenre
    const imgUrl = req.file.filename
    const imageUrl = `http://localhost:3000/storage/${imgUrl}`;
    const updatedFilm = await prisma.Films.update({
      where: { IdFilm: parseInt(id) },
      data: {
        FilmName,
        IdDirector: parseInt(director),
        imagenUrl: imageUrl,
        IdGenre: parseInt(genre),
      },
    });
    res.send({data:updatedFilm});
  } catch (error) {
    return handlerError(res, error.message,500)
  }
};

 const deleteFilm = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.Films.delete({
      where: { IdFilm: parseInt(id) },
    });
    res.send({ message: "Film deleted successfully" });
  } catch (error) {
    return handlerError(res, error,500)
  }
};
module.exports = { createFilm, getFilms, getFilmById, updateFilm, deleteFilm}