const {body,validationResult} = require ("express-validator")

module.exports = {
    validatorRegister :
[
    body("name").notEmpty().withMessage("El nombre es Obligatorio") ,
    body("email").isEmail().withMessage("Debes ser un email Valido"),
    body ("password").isLength({min:6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
]
};