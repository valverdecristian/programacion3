const express = require("express");
const router = express.Router();

// Importar el controlador
const { index, detalle, filtrarPorPais } = require("../controllers/heroesControllers");

// Definir rutas
router.get("/", index);
router.get("/:id", detalle);
router.get("/pais/:pais", filtrarPorPais);

// Exportar el enrutador
module.exports = router;