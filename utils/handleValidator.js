const { validationResult } = require("express-validator");
const validator = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        res.status(403)
        res.send({ error: err.array() })
    }
}

module.exports = { validator }