const express = require("express");

const { formRender, encriptar, comparar } = require("../controllers/registerController");

const router = express.Router();

// ruta para renderizar el formulario
router.get("/", formRender)

// ruta para encriptar la contraseña (/register/encriptar)
router.post("/encrypt", encriptar)

// ruta para comparar la contraseña
router.post("/compare", comparar)

module.exports = router;