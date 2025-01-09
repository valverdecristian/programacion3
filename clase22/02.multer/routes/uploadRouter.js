const express = require("express");
const router = express.Router();
const multerConfig = require ("../middlewares/multerConfig.js");
const { formRender, uploadFile } = require("../controllers/uploadController.js");

// ruta para renderizar el formulario de subida.
router.get("/", formRender)

router.post("/",multerConfig.single("file"), uploadFile)

module.exports = router;