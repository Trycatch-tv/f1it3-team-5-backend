const { createGenre, getGenres, getGenreById, updateGenre, deleteGenre } = require('../controllers/genresController.js')
const express = require('express')
const router = express.Router()


router.post('/', createGenre)
router.get('/', getGenres)
router.get('/:id', getGenreById)
router.put('/:id', updateGenre)
router.delete('/:id', deleteGenre)
module.exports = router