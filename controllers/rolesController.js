const prisma = require('../config/db')
const handlerError = require('../utils/handleError')


const createRole = async (req, res) => {
    try{
        const {RolName} = req.body
        const roleName = RolName
        console.log(roleName)
        const role = await prisma.Roles.create({
            data:{RolName:roleName}
        })
        res.send({data: role})
    }catch(error){
        handlerError(res,error.message,402)
    }
}
const getRoles = async (req, res) => {
    try{
        const roles = await prisma.Roles.findMany()
        res.send({data: roles})
    }catch(error){
        handlerError(res,error.message,402)
    }
}
const getRoleById = async (req, res) => {
    try{
        const {id} = req.params
        const role = await prisma.Roles.findUnique({
            where:{
                IdRol:parseInt(id)
            }
        })
        res.send({data: role})
    }catch(error){
        handlerError(res,error.message,402)
    }
}
const updateRole = async (req, res) => {
    try{
        const {id} = req.params
        const {RolName} = req.body
        const roleName = RolName
        const role = await prisma.Roles.update({
            where:{
                IdRol:parseInt(id)
            },
            data:{
                RolName:roleName
            }
        })
        res.send({data: role})
    }catch(error){
        handlerError(res,error.message,402)
    }
}
const deleteRole = async (req, res) => {
    try{
        const {id} = req.params
        const role = await prisma.Roles.delete({
            where:{
                IdRol:parseInt(id)
            }
        })
        res.send({data: role, message: 'Role deleted'})
    }catch(error){
        handlerError(res,error.message,402)
    }
}

module.exports = { createRole, getRoles, getRoleById, updateRole, deleteRole}