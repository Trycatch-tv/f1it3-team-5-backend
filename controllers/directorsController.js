const prisma = require('../config/db')
const handlerError = require('../utils/handleError')

const createdirector = async (req, res) => {
    try{
        const {DirectorName} = req.body
        const directorNames = DirectorName
        const director = await prisma.Directors.create({
           data:{DirectorName:directorNames}
        })
        res.send({data: director})
    }catch(error){
        handlerError(res,error.message,402)
    }
}
const getdirectors = async (req, res) => {
    try{
        const directors = await prisma.Directors.findMany()
        res.send({data: directors})
    }catch(error){
        handlerError(res,error.message,402)
    }
}
const getdirectorById = async (req, res) => {
    try{
        const {id} = req.params
        const director = await prisma.Directors.findUnique({
            where:{
                IdDirector:parseInt(id)
            }
        })
        res.send({data: director})
    }catch(error){
        handlerError(res,error.message,402)
    }
}
const updatedirector = async (req, res) => {
    try{
        const {id} = req.params
        const {DirectorName} = req.body
        const directorName = DirectorName
        const director = await prisma.Directors.update({
            where:{
                IdDirector:parseInt(id)
            },
            data:{
                DirectorName:directorName
            }
        })
        res.send({data: director})
    }catch(error){
        handlerError(res,error.message,402)
    }
}
const deletedirector = async (req, res) => {
    try{
        const {id} = req.params
        const director = await prisma.Directors.delete({
            where:{
                IdDirector:parseInt(id)
            }
        })
        res.send({data: director})
    }catch(error){
        handlerError(res,error.message,402)
    }
}
module.exports = { createdirector, getdirectors, getdirectorById, updatedirector, deletedirector}