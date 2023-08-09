require('dotenv').config()
const express = require("express");
const cors = require('cors')
 // Importa las rutas de las películas
const path = require('path')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
// Utiliza las rutas de las películas
app.use('/api',routes)
app.use(express.urlencoded({extended: false}));
app.use('/storage', express.static(path.join(__dirname, 'storage')));

app.listen(PORT,()=>{
    console.log(`el servidor se está ejecutando en http://localhost:${PORT}`);
})
