// defino lo que va a pasar cuando alguien ingresa en /posteos
// 1ro requiero express
const express = require("express");

// traigo los controladores
const {enviarPosts, enviarUnPost} = require ("../controllers/postControllers.js")

// configurar las rutas express

// creamos una instancia donde traigo todas las funcionalidades
const router = express.Router();

router.get ("/", enviarPosts)
router.get("/:id", enviarUnPost)

module.exports = router