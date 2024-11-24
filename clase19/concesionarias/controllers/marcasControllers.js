const fs = require("fs");

const concesionariasJSON = JSON.parse(
    fs.readFileSync("./data/concesionarias.json", "utf-8")
);

module.exports = {
    index: (req,res)=>{
        let marcas = [];
        concesionariasJSON.forEach((sucursal) => {
            sucursal.autos.forEach((auto)=>{
                if(marcas.includes(auto.marca)== false){
                    marcas.push(auto.marca)
                }
            });
        });
        res.render("marcas", {title: "Marcas", marcas});
    },
    show: (req,res)=>{
        let marcaReq = req.params.marca;
        let autosArray = []

        concesionariasJSON.forEach((sucursal)=>{
            sucursal.autos.forEach((auto)=>{
                if(marcaReq == auto.marca){
                    autosArray.push({
                        "modelo": auto.modelo,
                        "anio": auto.anio,
                        "color": auto.color,
                        "sucursal": sucursal.sucursal,
                        "img": auto.img
                    })
                }
            })
        })
        if(autosArray.length>0){
            res.render("marcaDetalle",{
                autosArray,
                marcaReq,
                title: `${marcaReq}`
            })
        } else{
            res.render("error",{
                titulo: "no pudimos encontrar esta marca",
                descripcion: "Intentalo nuevamente en las sucursales habilitadas",
                title: "ERROR"
            })
        }
    }
}