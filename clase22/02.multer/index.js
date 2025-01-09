const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.use(express.urlencoded({ extended: false }))

const uploadRouter = require ("./routes/uploadRouter.js")

// configuracion del motor de vistas
app.set("views", path.join(__dirname,"views"))
app.set ("view engine","ejs")


app.use("/upload", uploadRouter)

app.listen (port,()=>{
    console.log(`Servidor Ok en el puerto ${port}`);
    
})