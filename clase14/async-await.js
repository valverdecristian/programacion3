const URL_post = "https://jsonplaceholder.typicode.com/posts/";
const URL_users = "https://jsonplaceholder.typicode.com/users/";

// funcion que siempre va a devolver una promesa
// al usar "async" en la funcion estoy diciendo que es asincrona y devuelve una promesa
// siempre que hay un async tiene que haber un await
// await: se utiliza para esperar la promesa
const getNameAsync = async (idPost)=>{
    try {
        let respuestaPost = await fetch(`${URL_post}${idPost}`)
        let posteo = await respuestaPost.json();

        let respuestaUsers = await fetch (`${URL_users}${posteo.userId}`);
        let user = await respuestaUsers.json();

        document.write(`El post con el titulo: ${posteo.title}, lo escribio: ${user.name}`)
    
    } catch (error) {
        console.log(error);
    }
}

getNameAsync(38);