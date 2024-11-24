// punto de entrada de la aplicacion
// Importar Express
const express = require("express");
const path = require("path");

// Crear una instancia de Express
const app = express();

// Definir el puerto
const port = 3000;

// Configurar motor de vistas EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Importar las rutas
const mainRouter = require("./routes/mainRouter");
const heroesRouter = require("./routes/heroesRouter");

// Usar las rutas
app.use("/", mainRouter);
app.use("/heroes", heroesRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
