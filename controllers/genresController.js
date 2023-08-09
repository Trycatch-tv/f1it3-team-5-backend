const prisma = require('../config/db')
const handlerError = require('../utils/handleError')


/** 
 * Creo un nuevo genero
 * @swagger
 */
const createGenre = async (req, res) => { 
    try{
      const {GenreName} = req.body
      const genreName = GenreName
      console.log(genreName)
      const genre = await prisma.Genres.create({
        data:{GenreName:genreName}
      })
      res.send({data: genre})
    }catch(error){
        handlerError(res,error.message,402)
    }
/** 
 * obtengo todos los generos
 * @swagger 
 */

}
const getGenres = async (req, res) => {
    try{
      const genres = await prisma.Genres.findMany()
      res.send({data: genres})
    }catch(error){
        handlerError(res,error.message,402)
    }

}
/**
 * obtengo un genero por id
 * @swagger 
 * @param {} req 
 * @param {*} res 
 */
const getGenreById = async (req, res) => {
    try{
      const {id} = req.params
      console.log(id)
      const genre = await prisma.Genres.findUnique({
        where:{
          IdGenre:parseInt(id)
        }
      })
      if (!genre) {
        return handlerError(res,error.message,402)
    }
      res.send({data: genre})
    }catch(error){
        handlerError(res,error.message,402)
    }

}

/**
 * actualizo un genero por id
 * @swagger
 * @param {} req
 * @param {*} res
 */
const updateGenre = async (req, res) => {
    try{
      const {id} = req.params
      const {GenreName} = req.body
      const genreName = GenreName
      console.log(genreName)
      const genre = await prisma.Genres.update({
        where:{
          IdGenre:parseInt(id)
        },
        data:{
          GenreName:genreName
        }
      })
      res.send({data: genre})
    }catch(error){
        handlerError(res,error.message,402)
    }

}
/**
 * borro un genero por id
 * @swagger
 * @param {} req
 * @param {*} res
 */
const deleteGenre = async (req, res) => {
    try{
      const {id} = req.params
      const genre = await prisma.Genres.delete({
        where:{
          IdGenre:parseInt(id)
        }
      })
      res.send({data: genre})
    }catch(error){
        handlerError(res,error.message,402)
    }

}

module.exports = { createGenre, getGenres, getGenreById, updateGenre, deleteGenre}
