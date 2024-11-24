const fs = require("fs");

// Leer el archivo JSON de forma síncrona
const heroesJSON = JSON.parse(
    fs.readFileSync("./data/heroes.json", "utf-8")
);

// Exportar funciones del controlador
module.exports = {
    index: (req, res) => {
        res.render("heroes", {
            title: "Héroes Geniales",
            heroes: heroesJSON
        });
    },
    detalle: (req, res) => {
        const id = req.params.id;
        const heroe = heroesJSON.find(h => h.id == id);

        if (heroe) {
            res.render("heroeDetalle", {
                title: heroe.nombre,
                heroe
            });
        } else {
            res.render("error", {
                titulo: "No pudimos encontrar al héroe",
                descripcion: "Inténtalo nuevamente.",
                title: "ERROR"
            });
        }
    },
    filtrarPorPais: (req, res) => {
        const pais = req.params.pais;
        const heroesFiltrados = heroesJSON.filter(h => h.pais === pais);

        if (heroesFiltrados.length > 0) {
            res.render("heroesFiltrados", {
                title: `Héroes de ${pais}`,
                heroes: heroesFiltrados,
                pais
            });
        } else {
            res.render("error", {
                titulo: "No pudimos encontrar héroes de ese país",
                descripcion: "Inténtalo nuevamente.",
                title: "ERROR"
            });
        }
    }
};