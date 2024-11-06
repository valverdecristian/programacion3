// tema principal de la clase: modularizar
// creamos un servidor para que entre cliente y servidor halla intercomunicacion

// funcion que tiene adentro muchas funciones
// debo instalar cors para el "origen cruzado" > npm install cors

const express = require ("express");
const app = express();
const cors = require("cors");
const postRouter = require("./routes/postRoutes.js")
const db = require ("./data/db.js")

// habilita el intercambio de informacion de origen cruzado
app.use(cors());
// analiza los requuest [funcion mideword] > me llega la info en un formato y lo transformo a json
app.use (express.json())

const port = 3030;

// habilitar el intercambio de informacion (cors)



// ejemplo sin modularizar
app.get("/", (req, res)=>{
    res.send("estas en el home del proyecto CRUD UTN");
})

// cambio el get a use para enviarlo a postRouter
app.use("/posteos", postRouter)


// tarea: conexion a la base de datos
const conexionDB = async () => {
    try {
        await db.authenticate();
        console.log("conexion exitosa");
        
    } catch (error) {
        console.log(`hay un error y es el siguiente ${error}`);
        
    }
}


app.listen(port, ()=>{
    conexionDB();
    console.log(`server ok en el puerto: ${port}`);
})


// trabajamos con nodemon ./index.js