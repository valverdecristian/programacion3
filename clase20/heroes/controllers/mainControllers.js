const fs = require("fs");

// Leer el archivo JSON de forma síncrona
const heroesJSON = JSON.parse(
    fs.readFileSync("./data/heroes.json", "utf-8")
);

// Exportar funciones del controlador
module.exports = {
    index: (req, res) => {
        res.render("main", {
            title: "Heroes Geniales",
            heroes: heroesJSON
        });
    },
};
