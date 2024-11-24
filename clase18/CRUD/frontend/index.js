document.addEventListener("DOMContentLoaded", ()=>{

    // obtener el body de la tabla donde queremos mostrar los posteos
    const bodyTablaPosteos = document.querySelector("#body-tabla-posteos");

    // obtener el formulario para crear un nuevo posteo
    const formCrearPosteo = document.querySelector("#form-crear-posteo");

    // funcion para obtener los datos de NUESTRA API utilizando AXIOS
    const fetchPosteos = async () => {
        try {
            const respuesta = await axios(`http://localhost:3030/posteos`);
            // console.log(respuesta.data);
            const posteos = respuesta.data;

            // limpiar la tabla antes de agregar los nuevos datos
            bodyTablaPosteos.innerHTML = "";

            posteos.forEach(posteo=>{
                const fila = document.createElement("tr");

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
            console.error(`error al obtener los post: ${error}`);
        }
    }

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




})
