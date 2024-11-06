/*  API : Interfaz de Programacion de Aplicaciones.
    Es un conjunto de reglas, definiciones y protocolos que permiten
    que diferentes aplicaciones, servicios o sistemas se comuniquen entre si.
    En terminos simples es un "intermediario" que permite que dos aplicaciones
    o sistemas intercambien informacion de manera estructurada y eficiente.

    Componentes claves:
    > Solicitud (Request) >> metodos HTTP (GET, POST, PUT, DELETE, etc)
        Es cuando el cliente (tu aplicacion) envia una solicitud al servidor (API)
        para pedir o enviar informacion, las solicitudes se hacen utilizando los metodos
        HTTP.
    > Respuesta (Response) >> Es la informacion que el servidor devuelve al cliente.
        La respuesta incluye:
            * Un codigo de estado HTTP que indica el resultado de la solicitud
            * El cuerpo de la respuesta, generalmente en formato JSON o XML (JavaScript Object Notation)

    Tipos de APIs:
    > APIs Web: permiten la interaccion entre servidores y aplicaciones a traves de la web usando el protocolo HTTP/HTTPS.
    > APIs de bibliotecas: como JQuery o React para manipular el DOM o manejar el estado de una aplicacion.
    > APIs de hardware: estas APIs permiten que las aplicaciones se comuniquen directamente con el hardware del dispositivo
*/

// METODOS DE HTTP:
// GET: para solicitar informacion del servidor
// POST: para enviar o crear informacion en el servidor
// PUT: para actualizar datos existentes en el servidor.
// DELETE: para eliminar datos en el servidor.