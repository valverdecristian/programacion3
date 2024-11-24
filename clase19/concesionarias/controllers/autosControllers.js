const fs = require("fs");
const { title } = require("process");

const concesionariasJSON = JSON.parse(
    fs.readFileSync("./data/concesionarias.json", "utf-8")
);

module.exports = {
    index: (req, res) => {
        let autos = []

        concesionariasJSON.forEach((sucursal)=>{
            sucursal.autos.forEach((auto)=>{
                autos.push(auto)
            })
        })
        res.render("autos", {title: "Autos", autos:autos})
    },
    dato: (req, res) => {
        let marca = req.params.marca;
        let dato = req.params.dato;
        let autos = [];

        concesionariasJSON.forEach((sucursal) => {
            sucursal.autos.forEach((auto) => {
                if(auto.marca == marca && (auto.modelo == dato || auto.anio == dato || auto.color == dato)){
                    autos.push({
                        "modelo": auto.modelo,
                        "anio": auto.anio,
                        "color": auto.color,
                        "sucursal": sucursal.sucursal,
                        "img": auto.img
                    });
                }
            })
        })

        if(autos.length > 0){
            res.render("dato", {marca, autos:autos, title: `${marca}`})
        } else {
            res.render("error",{
                titulo: "no pudimos encontrar ese dato",
                descripcion: "Intentalo nuevamente en los datos habilitadas",
                title: "ERROR"
            })
        }
    }
};