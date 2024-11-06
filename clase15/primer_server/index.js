// vamos a trabajar con los modulos nativos de node para entender como funciona

// modulo nativo de node
const http = require("http");

// funcion create server, trae el callback(req,res)
http.createServer((solicitud, respuesta)=>{
    respuesta.writeHead(200, {"content-Type":"text/plain"});
    respuesta.end("Primer Server Node UTN");
}).listen(3030, "localhost")

// para salir -> control + c