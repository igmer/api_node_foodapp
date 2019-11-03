let Sequelize = require('sequelize');
const db = require('../config/database');
const Usuario = db.define('usuarios', {
    id: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true },
    Nombre:Sequelize.STRING,
    usuario:Sequelize.STRING,
    password:Sequelize.STRING,
    activo:Sequelize.STRING,
    Idsucursal:Sequelize.STRING,
    deleted:Sequelize.STRING,
    createdAt:Sequelize.STRING,
    updatedAt:Sequelize.STRING,
    IdRol:Sequelize.INTEGER
},{
    tableName: 'usuarios',
    timestamps:false
});
module.exports = Usuario;
