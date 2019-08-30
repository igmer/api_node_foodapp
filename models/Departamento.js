let Sequelize = require('sequelize');
const db = require('../config/database');
const Departamento = db.define('adm_Departamentos', {
    IdDepartamento: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: false },
    Nombre:Sequelize.STRING,
},{
    tableName: 'adm_Departamentos',
    timestamps:false,
});
Departamento.removeAttribute('id');
module.exports = Departamento;
