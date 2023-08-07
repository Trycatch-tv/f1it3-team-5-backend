// src/controllers/filmsController.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createFilm = async (req, res) => {
  try {
    const { FilmName, IdDirector, imagenUrl, IdGenre } = req.body;
    const film = await prisma.films.create({
      data: {
        FilmName,
        IdDirector,
        imagenUrl,
        IdGenre,
      },
    });
    res.status(201).json(film);
  } catch (error) {
    res.status(500).json({ error: "Error creating film" });
  }
};

export const getFilms = async (req, res) => {
  try {
    const films = await prisma.films.findMany();
    res.json(films);
  } catch (error) {
    res.status(500).json({ error: "Error fetching films" });
  }
};

export const getFilmById = async (req, res) => {
  try {
    const { id } = req.params;
    const film = await prisma.films.findUnique({
      where: { IdFilm: parseInt(id) },
      include: {
        director: true,
        genre: true,
      },
    });
    if (!film) {
      res.status(404).json({ message: "Film not found" });
    } else {
      res.json(film);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching film" });
  }
};

export const updateFilm = async (req, res) => {
  try {
    const { id } = req.params;
    const { FilmName, IdDirector, imagenUrl, IdGenre } = req.body;
    const updatedFilm = await prisma.films.update({
      where: { IdFilm: parseInt(id) },
      data: {
        FilmName,
        IdDirector,
        imagenUrl,
        IdGenre,
      },
    });
    res.json(updatedFilm);
  } catch (error) {
    res.status(500).json({ error: "Error updating film" });
  }
};

export const deleteFilm = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.films.delete({
      where: { IdFilm: parseInt(id) },
    });
    res.json({ message: "Film deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting film" });
  }
};
