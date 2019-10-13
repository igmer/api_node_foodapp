let Sequelize = require('sequelize');
const db = require('../config/database');
const Checkin = db.define('fac_CheckIn', {
    Id: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true },
    IdCliente:Sequelize.INTEGER,         //INT NOT NULL,
	IdVendedor:Sequelize.INTEGER,        //INT NOT NULL,
	Latitud:Sequelize.DECIMAL,           //DECIMAL (10,4) NOT NULL,
	Longitud:Sequelize.DECIMAL,          //DECIMAL (10,4) NOT NULL,
	Pedido:Sequelize.BOOLEAN,            //BIT NOT NULL,
	Comentario:Sequelize.STRING,        //VARCHAR (150) NULL,
	FechaHoraCreacion:Sequelize.STRING

},{
    tableName: 'fac_CheckIn',
    timestamps:false,
});
module.exports = Checkin;
