const express = require("express");
const router = express.Router();

// Importar el controlador
const {index} = require("../controllers/mainControllers.js");

// Definir rutas
router.get("/", index);

// Exportar el enrutador
module.exports = router;