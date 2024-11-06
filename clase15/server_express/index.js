// funcion que tiene adentro muchas funciones
const express = require ("express");

// creo una instancia de express en la variable app
const app = express()

const port = 3030;

// metodos http: GET, POST, PUT, DELETE
// CRUD -> SERVIDOR QUE ... EN LA BASE DE DATOS
// Create (post) - Read (get) - Update (put) - Delete

app.get("/", (req, res)=>{
    res.send("estas en el home del servidor creado con express")
})

app.get("/conocenos", (req, res)=>{
    res.send("estas en la seccion conocenos del servidor creado con express")
})

app.listen(port, ()=>{
    console.log(`server ok en el puerto: ${port}`);
    
})

