// defino lo que va a pasar cuando alguien ingresa en /posteos
// 1ro requiero express
const express = require("express");

// traigo los controladores
const {traerPosteos, traerUnPost, crearPosteo} = require ("../controllers/postControllers.js")

// configurar las rutas express

// creamos una instancia donde traigo todas las funcionalidades
const router = express.Router();

router.get ("/", traerPosteos)
router.get("/:id", traerUnPost)
router.post("/", crearPosteo)

module.exports = router