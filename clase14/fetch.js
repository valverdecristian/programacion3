// esto es una API con posteos (post)
const URL_post = "https://jsonplaceholder.typicode.com/posts/";
const URL_users = "https://jsonplaceholder.typicode.com/users/";

// funcion asincrona que guarda el posteo
// de la respuesta lo paso a un json
// 2do then guardo esa info en una variable para ser usada luego.
// then es el entonces. el 1er then recibe un callback
// en el 1er then obtengo el resultado y pasado a json
// en el 2do then tomo json y lo guardo en la variable post
const getNameFetch = (idPost)=>{
    try {
        fetch(`${URL_post}${idPost}`)
        .then((respuesta)=>{
            return respuesta.json();
        })
        .then((post)=>{
            // hago el llamado a otra API para ver info del usuario
            fetch(`${URL_users}${post.userId}`)
            .then((respuesta)=>{
                return respuesta.json();
            })
            .then((user)=>{
                console.log(`El posteo dice: ${post.body} y lo escribio ${user.name} y vive en la ciudad: ${user.address.city}`);
            })
            
        })
    } catch (error) {
        console.log(`error: ${error.message}`);
        
    }
}

getNameFetch(1);