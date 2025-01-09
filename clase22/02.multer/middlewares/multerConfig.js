const { log } = require("console");
const multer = require("multer");
const path = require("path");

// configuramos donde se guardaran los archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        
        // cb: callback que se usa para indicar el destino
        cb(null, path.join(__dirname, "../uploads"));
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

// agregamos un filtrado
// MIME tipo de archivo = "image/jpg", "image/png", etc... ["tipo/formato"]
const fileFilter = (req, file, cb)=>{
    if(file.mimetype.startsWith("image/"))
    {
        cb(null, true)
    }
    else {
        cb(new Error("Archivo no valido, solo permitimos imagenes"))
    }
}

// const upload = multer({ storage: storage })
module.exports = multer({storage, fileFilter})