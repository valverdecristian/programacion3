const {Sequelize} = require ("sequelize");

// new Sequelize ("nombre_db", "usuario", "contraseña", {host, dialect y port})
const db = new Sequelize ("posteosutn","root","",{
    host : "localhost",
    dialect:"mysql",
    port: 3306
});

module.exports = db;