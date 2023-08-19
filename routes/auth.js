// auth.routes.js
const jwt = require("jsonwebtoken");
const express = require("express");
const {
  signup,
  registerUser,
  loginUser,
  refreshToken,
  logout,
} = require("../controllers/authController.js");

const JWT_SECRET = process.env.JWT_SECRET; // Asegúrate de definir esto en tu archivo .env

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(403);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Cambiado el código de estado a 403
    req.user = user;
    next();
  });
}


const router = express.Router();

router.post("/signup", signup);
router.post("/register", registerUser); // no funciona
router.post("/login", verifyToken , loginUser);
router.post("/refresh-token", refreshToken); //no esta configurado
router.put("/logout", verifyToken, logout);


module.exports = router;
