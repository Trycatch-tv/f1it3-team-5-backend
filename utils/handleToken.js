const jsonwebtoken = require("jsonwebtoken");
const { handleError } = require("./handleError");
/**
 * debes pasar un objeto con la informacion que quieras que tenga el token en este caso el user
 * @param {
 * } token
 */
const signToken = (token) => {
  const sign = jsonwebtoken.sign(
    {
      _id: token.id,
      role: token.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return sign;
};
/**
 * le paso la informacion del token y me devuelve el objeto con la informacion que le pase al firmarlo
 * el token de sesion
 * @param {*} token
 */
const verifyToken = (token) => {
  try {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    handleError(res, error, 401);
  }
};

module.exports = { signToken, verifyToken };
