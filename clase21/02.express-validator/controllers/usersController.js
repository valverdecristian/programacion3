const { validationResult } = require("express-validator");

module.exports = {
    showForm: (req, res) => {
        res.render("register", { errors: [] }); // enviamos un array vacio al inicio
    },
    
    //controlador
    validatorForm: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            //si hay errores, renderizar la vista nuevamente con los mensajes
            return res.render("register", { errors: errors.array() });
        }
        // simulamos un registro exitoso
        res.send("user registrado con exito");
    },
};
