// importamos express para manejar solicitudes
const express = require ("express")
/* creamos un nuevo enrutador (router) para manejar las rutas de este modulo */
const router = express.Router()

// controladores
const {index,show} = require ("../controllers/sucursalesControllers.js")

router.get ("/",index)
router.get ("/:sucursal",show)

// Manejo de errores en rutas
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

module.exports = router