module.exports = {

    formRender: (req,res)=>{
        res.render("upload", {message:""})
    },

    uploadFile: (req,res)=>{
        if(!req.file){
            return res.render("upload", {message:"no se subio el archivo"})
        }
        res.render("upload", {message:`Archivo subido: ${req.file.filename}`})
    }
}