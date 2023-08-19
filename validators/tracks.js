const {check} = require("express-validator");
const {validator} = require('../utils/handleValidator')
const validatorCreateItems=[
    check('name').exists().notEmpty().withMessage('Name is required'),
    check('album').exists().notEmpty().withMessage('Album is required'),
    check('cover').exists().notEmpty().withMessage('Cover is required'),
    check('artist').exists().notEmpty().withMessage('Artist is required'),
    check('artist.name').exists().notEmpty().withMessage('name artisit is required'),
    check('artist.nickName').exists().notEmpty().withMessage('nickname artist is required'),
    check('artist.nationality').exists().notEmpty().withMessage('nationality artist is required'),
    check('duration').exists().notEmpty().withMessage('Duration is required'),
    check('duration.start').exists().notEmpty().withMessage('Start is required'),
    check('duration.end').exists().notEmpty().withMessage('End is required'),
    check('mediaId').exists().notEmpty().isMongoId().withMessage('MediaId is required'),
    (req,res,next)=>validator(req,res,next)
]
const validatorGetItem=[
    check('id').exists().notEmpty().isMongoId().withMessage('Id is required'),
    (req,res,next)=>validator(req,res,next)
]
module.exports = {validatorCreateItems,validatorGetItem}