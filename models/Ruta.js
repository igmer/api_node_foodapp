let Sequelize = require('sequelize');
const db = require('../config/database');
const Ruta = db.define('rutas', {
    id: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: false },
    nombre:Sequelize.STRING,
    descripcion:Sequelize.STRING,
},{
    tableName: 'rutas',
    timestamps:false,
});
module.exports = Ruta;
