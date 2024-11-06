// funcion que tiene adentro muchas funciones
const express = require ("express");

// creo una instancia de express en la variable app
const app = express()

const port = 3030;

app.get("/", (req, res)=>{
    res.send("estas en el home del proyecto CRUD UTN")
})

app.listen(port, ()=>{
    console.log(`server ok en el puerto: ${port}`);
})

