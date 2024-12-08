document.addEventListener("DOMContentLoaded", ()=>{

    // obtener el body de la tabla donde queremos mostrar los posteos
    const bodyTablaPosteos = document.querySelector("#body-tabla-posteos");

    // obtener el formulario para crear un nuevo posteo
    const formCrearPosteo = document.querySelector("#form-crear-posteo");

    // funcion para obtener los datos de NUESTRA API utilizando AXIOS
    const fetchPosteos = async () => {
        try {
            const respuesta = await axios(`http://localhost:3030/posteos`);
            // console.log(respuesta.data); // axios en data me trae el json
            const posteos = respuesta.data;

            // limpiar la tabla antes de agregar los nuevos datos
            bodyTablaPosteos.innerHTML = "";

            posteos.forEach(posteo=>{

                // creo una nueva fila
                const fila = document.createElement("tr");

                // en esa fila tengo que crear celdas
                const celdaTitulo = document.createElement("td");
                const celdaContenido = document.createElement("td");
                const celdaAcciones = document.createElement("td");

                // asignar el contenido de las celdas
                celdaTitulo.textContent = posteo.titulo;
                celdaContenido.textContent = posteo.contenido;

                // crear el boton para eliminar dinamicamente
                const botonEliminar = document.createElement("button");
                botonEliminar.textContent = "Eliminar";
                botonEliminar.addEventListener("click", ()=>{
                    borrarPosteo(posteo.id);
                })
                // crear el boton para editar dinamicamente
                const botonEditar = document.createElement("button");
                botonEditar.textContent = "Editar";
                botonEditar.addEventListener("click", ()=>{
                    // redirigir a la pagina de edicion
                    window.location.href = `edit.html?id=${posteo.id}`;
                })

                //agregamos los botones a las celdas de acciones
                celdaAcciones.appendChild(botonEliminar)
                celdaAcciones.appendChild(botonEditar)

                // agregamos las celdas a las filas
                fila.appendChild(celdaTitulo);
                fila.appendChild(celdaContenido);
                fila.appendChild(celdaAcciones);

                // agregar la fila al cuerpo de la tabla
                bodyTablaPosteos.appendChild(fila);
            })
            
        } catch (error) {
            // error pinta de color rojo la consola
            console.error(`error al obtener los post: ${error}`);
        }
    }

    // funcion para eliminar un posteo
    const borrarPosteo = async (id) => {
        try {
            await axios.delete(`http://localhost:3030/posteos/${id}`);
            fetchPosteos();
        } catch (error) {
            
        }
    }

    // funcion para crear un nuevo posteo
    formCrearPosteo.addEventListener("submit", async function(evento){

        // preventDefault detiene el evento predeterminado
        evento.preventDefault();

        const nuevoPosteo = {
            titulo: document.querySelector("#nuevo-titulo").value,
            contenido: document.querySelector("#nuevo-contenido").value
        };

        try {
            await axios.post(`http://localhost:3030/posteos`, nuevoPosteo)
            formCrearPosteo.reset();
            fetchPosteos();
        } catch (error) {
            console.error(`error al postear: ${error}`)
        }
    })

    fetchPosteos();
})
