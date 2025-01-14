//
const postsModel = require("../models/postModel.js")

// aca van las funciones CRUD

// funcion que trae todos los posteos. Read - metodo get
const traerPosteos = async (req, res)=>{
    try {
        const posteos = await postsModel.findAll();
        res.json(posteos);
    } catch (error) {
        res.json({message:error.message});
    }
}

// funcion para traer un posteo
const traerUnPost = async (req, res)=>{
    try {
        const posteo = await postsModel.findByPk(req.params.id);
        res.json(posteo);
    } catch (error) {
        res.json({message:error.message});
    }
}

// funcion que crea un registro. Create - metodo post
const crearPosteo = async (req,res)=>{
    try {
        await postsModel.create(req.body)
        console.log("registro creado correctamente");
        
    } catch (error) {
        res.json({message:error.message});
    }
}

// me falta actualizar un posteo y eliminar un posteo

module.exports = {traerPosteos, traerUnPost, crearPosteo};