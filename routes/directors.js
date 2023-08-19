const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware.js");


const {createdirector, getdirectors, getdirectorById, updatedirector, deletedirector} = require('../controllers/directorsController')

router.get('/', authenticateToken, getdirectors)
router.post("/", authenticateToken, createdirector);
router.get("/:id", authenticateToken, getdirectorById);
router.put("/:id", authenticateToken, updatedirector);
router.delete("/:id", authenticateToken, deletedirector);

module.exports = router

