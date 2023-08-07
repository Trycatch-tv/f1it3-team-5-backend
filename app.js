import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import filmsRoutes from "./src/routes/api.routes.js"; // Importa las rutas de las películas
const router = express.Router()
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
// Utiliza las rutas de las películas
app.use("/api/films", filmsRoutes);
//app.use("/api", filmsRoutes);
app.listen(PORT,()=>{
    console.log(`el servidor se está ejecutando en http://localhost:${PORT}`);
})
