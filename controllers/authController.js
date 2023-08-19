const prisma = require("../config/db");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const handlerError = require('../utils/handleError')


const JWT_SECRET = process.env.JWT_SECRET; // Asegúrate de definir esto en tu archivo .env

const signup = async (req, res) => {
  const { id, UserName, UserRol } = req.body;

  // Crear un objeto con la información a incluir en el token
  const tokenPayload = { id, UserName, UserRol };

  jwt.sign(tokenPayload, JWT_SECRET, (err, token) => {
    if (err) {
      res.status(400).send({ msg: "Error" });
    } else {
      res.send({ msg: "success", token: token });
    }
  });
};

const registerUser = async (req, res) => {
  try {
    const { UserName, UserPassword, UserEmail, UserRol } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await prisma.user.findUnique({
      where: {
        UserName: UserName,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hashear la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcryptjs.hash(UserPassword, 10);

    // Crear el nuevo usuario en la base de datos
    const newUser = await prisma.user.create({
      data: {
        UserName: UserName,
        UserPassword: hashedPassword,
        UserEmail: UserEmail,
        UserRol: UserRol,
      },
    });

    res.json({ message: "User registered successfully" });
  } catch (error) {
    // Manejo de errores
    handlerError(res, error.message, 500); // Pasar el mensaje de error y el código de estado
  }
};


const loginUser = async  (req, res) => {
  res.send("You are Authorized!");
};

const refreshToken = async (req, res) => {
  // Implementar la lógica de renovación de token
};

const logout = async (req, res) => {
  const authHeader = req.headers["authorization"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "Has sido desconectado" });
    } else {
      res.send({ msg: "Error" });
    }
  });
};

module.exports = { signup, registerUser, loginUser, refreshToken, logout };
