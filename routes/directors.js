const express = require("express");
const router = express.Router();


const {createdirector, getdirectors, getdirectorById, updatedirector, deletedirector} = require('../controllers/directorsController')

router.get('/', getdirectors)
router.post('/', createdirector)
router.get('/:id', getdirectorById)
router.put('/:id', updatedirector)
router.delete('/:id', deletedirector)

module.exports = router

