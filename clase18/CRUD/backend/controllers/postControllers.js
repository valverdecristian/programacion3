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
        res.json("registro creado correctamente");
        
    } catch (error) {
        res.json({message:error.message});
    }
}

// me falta actualizar un posteo y eliminar un posteo
// Función para actualizar un posteo. Update - método PUT
const actualizarPosteo = async (req, res) => {
    try {
        const posteo = await postsModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json("Registro actualizado correctamente");
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Función para eliminar un posteo. Delete - método DELETE
const eliminarPosteo = async (req, res) => {
    try {
        await postsModel.destroy({
            where: { id: req.params.id }
        });
        res.json("Registro eliminado correctamente");
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {traerPosteos, traerUnPost, crearPosteo, actualizarPosteo, eliminarPosteo};