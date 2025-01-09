const bcryptjs = require("bcryptjs");

module.exports = {

    formRender: (req,res)=>{
        res.render("register", {message: ""})
    },

    encriptar: async (req, res)=>{
        const {password} = req.body;
    
        // encriptar contraseña
        const hashedPassword = await bcryptjs.hash(password, 10)
        // mostrar la contraseña encriptada
        res.render("register", {message: `Contraseña encriptada: ${hashedPassword}`})
    },

    comparar: async (req, res)=>{
        const {comparePassword, hashedPassword} = req.body;
    
        // comparamos la contraseña original con la encriptada
        const isMatch = await bcryptjs.compare(comparePassword, hashedPassword)
    
        // mostrar resultado (usamos ternario)
        const message = isMatch ? "las contraseñas coinciden":"las constraseñas no coinciden";
    
        res.render("register", {message});
    }

}