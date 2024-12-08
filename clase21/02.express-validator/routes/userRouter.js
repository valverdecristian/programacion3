const express = require ("express")

const {body, validationResult} = require('express-validator');

const router = express.Router();

const {validatorRegister} = require ("../middlewares/validatorConfig.js")
const {showForm,validatorForm} = require ("../controllers/usersController.js")

// Ruta para renderizar el formulario
router.get ("/register", showForm)

// Ruta para procesar el registro con validaciones
router.post ("/register",validatorRegister,validatorForm)

module.exports = router