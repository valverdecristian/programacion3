// Inicializar la página al cargar
window.addEventListener("load", () => cargarPeliculas());

// Control de la paginación
let pagina = 1;

// Capturar botones
const btnAnterior = document.querySelector(".btnAnterior");
const btnSiguiente = document.querySelector(".btnSiguiente");

// Mostrar el número de la página actual
const mostrarNumeroPagina = () => {
    document.querySelector(".numeroPagina").textContent = `Página: ${pagina}`;
};

// Event Listeners para paginación
btnAnterior.addEventListener("click", () => {
    pagina > 1 ? (pagina--, cargarPeliculas()) : null;
});

btnSiguiente.addEventListener("click", () => {
    pagina < 500 ? (pagina++, cargarPeliculas()) : null;
});

// Función que carga y muestra las películas
const cargarPeliculas = async () => {
    const URL_AXIOS = `https://api.themoviedb.org/3/movie/popular?api_key=4ded9cf1976c4bb43a4142e55b6727d2&language=es-MX&page=${pagina}`;

    try {
        const respuesta = await axios (URL_AXIOS);

        // Condicional ternario para verificar el estado de la respuesta
        respuesta.status === 200
            ? (() => {
                const peliculas = respuesta.data.results.map(
                    (pelicula) => `
                        <div class="pelicula">
                            <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}" />
                            <h3 class="titulo">${pelicula.title}</h3>
                        </div>`
                ).join("");

                document.querySelector(".contenedor").innerHTML = peliculas;
                mostrarNumeroPagina(); // Mostrar número de página actual
            })()
            : respuesta.status === 404
                ? console.log("Error 404: Página no encontrada.")
                : console.log("Ha ocurrido un error.");
                
    } catch (error) {
        console.error("Error al cargar las películas:", error);
    }
};

// Llamar a la función para mostrar el número de página inicial
mostrarNumeroPagina();
