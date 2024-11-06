const enviarPosts = (req, res)=>{
    res.send ("Esta funcion te trae todos los posteos desde postControllers")
}

const enviarUnPost = (req, res)=>{
    const id = req.params.id;
    res.send(`Te envio el posteo del id: ${id}`)
}

module.exports = {enviarPosts, enviarUnPost};