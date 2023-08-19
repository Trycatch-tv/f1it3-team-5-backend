const {check} = require('express-validator');
const validator = require('../utils/handleValidator')


const validatorLogin = [
    check('UserEmail').isEmail().withMessage('El email es requerido'),
    check('UserPassword').isString().withMessage('La contraseña es requerida'),
]
const validatorCreateUser = [
    check('UserName').isString().withMessage('El nombre es requerido'),
    check('UserRol ').isNumeric().withMessage('El rol es requerida'),
    check('UserEmail').isEmail().withMessage('El email es requerido'),
    check('UserPassword').isString().withMessage('La contraseña es requerida'),
    
]

module.exports = {validatorLogin, validatorCreateUser}