const multer = require("multer");
const path = require("path");
const fs = require("fs");

/**con multer se puede subir archivos al servidor 
 *  @swagger
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../storage"));
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})
/**
 * @swagger
 * en la variable upload se guarda el archivo que se sube al servidor
 */
const upload = multer({ storage });


module.exports = upload;
