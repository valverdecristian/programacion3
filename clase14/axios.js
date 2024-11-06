// Axios es una biblioteca de JS
// manejo automatico: osea que no tenemos que usar el .json
// para usar axios tengo que utilizar el cdn en el HTML

const URL_post = "https://jsonplaceholder.typicode.com/posts/";
const URL_users = "https://jsonplaceholder.typicode.com/users/";

const getNameAxios = async (idPost) => {
    try {
        let resPost = await axios (`${URL_post}${idPost}`)
        // resPost en data guarda la info en un json
        let resUsers = await axios ((`${URL_users}${resPost.data.userId}`));
        
        document.write(`${resUsers.data.name} vive en ${resUsers.data.address.city}`)
        
    } catch (error) {
        console.log(error);
    }
}

getNameAxios(18);