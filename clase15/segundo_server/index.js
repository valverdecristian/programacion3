const http = require("http");

// funcion create server, trae el callback(req,res)
// esto luego se modulariza, cada tarea en dif archivos.
http.createServer((solicitud, respuesta)=>{
    respuesta.writeHead(200, {"content-Type":"text/plain"});
    if(solicitud.url == "/"){
        respuesta.end("Este es el home");
    }else if(solicitud.url == "/conocenos"){
        respuesta.end("Estas en la seccion conocenos")
    }
    else{
        respuesta.end("Error 404")
    }
}).listen(3030, "localhost")

// para salir -> control + c