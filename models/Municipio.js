let Sequelize = require('sequelize');
const db = require('../config/database');
const Municipio = db.define('adm_Municipios', {
    IdMunicipio: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: false },
    IdDepartamento:Sequelize.INTEGER,
    Nombre:Sequelize.STRING,

},{
    tableName: 'adm_Municipios',
    timestamps:false,
});
Municipio.removeAttribute('id');
module.exports = Municipio;
