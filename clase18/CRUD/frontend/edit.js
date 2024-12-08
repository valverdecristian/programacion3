/* DOMContentLoaded */

document.addEventListener("DOMContentLoaded", () => {
    // obtener el formulario de edicion
    const formEditar = document.querySelector("#form-editar-posteo");

    // obtener los parametros de la URL
    const parametrosURL = new URLSearchParams(window.location.search);

    const idPosteo = parametrosURL.get("id");

    // funcion para obtener el posteo por id
    const traerPosteo = async (id) => {
        try {
            const respuesta = await axios.get(`http://localhost:3030/posteos/${id}`);
            
            const posteo = respuesta.data;

            // asignar los valores que obtuve a los campos del formulario
            document.querySelector("#nuevo-titulo").value = posteo.titulo;
            document.querySelector("#nuevo-contenido").value = posteo.contenido;

        } catch (error) {
            console.error(`Error al obtener el posteo ${error}`);
        }
    };
    /*   llamar a la funcion para obtener el posteo actual */

    if (idPosteo) {
        traerPosteo(idPosteo);
    }

    // crear la funcion para actualizar el posteo
    formEditar.addEventListener("submit", async function (evento) {
        evento.preventDefault();

        const actualizarPosteo = {
            titulo: document.querySelector("#nuevo-titulo").value,
            contenido: document.querySelector("#nuevo-contenido").value,
        };
        try {
            await axios.put(`http://localhost:3030/posteos/${idPosteo}`, actualizarPosteo);
            
            alert(`Posteo ${idPosteo}Actualizado`);
            
            //Redirigir a la pagina principar despues de actualizar
            window.location.href = "index.html";
            
        } catch (error) {
            console.error(`Error al editar el posteo ${error}`);
        }
    });
});
