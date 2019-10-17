let Sequelize = require('sequelize');
const db = require('../config/database');
const Pedido = require('./Pedido');
const PedidoDetalle = db.define('fac_PedidosDetalle', {
    Id: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: false },
    IdComprobante:Sequelize.INTEGER,
     IdProducto:Sequelize.INTEGER,
     IdPrecio:Sequelize.INTEGER,
     Cantidad:Sequelize.INTEGER,
     Descripcion:Sequelize.STRING,
     PrecioVenta:Sequelize.DOUBLE,
      PorcDescuento:Sequelize.DOUBLE,
     ValorDescuento:Sequelize.DOUBLE,
     PrecioUnitario:Sequelize.DOUBLE,
     PrecioTotal:Sequelize.DOUBLE,
     CreadoPor:Sequelize.STRING,
     FHCreacion:Sequelize.STRING,
     CantidadConfirmada:Sequelize.INTEGER
},{
    tableName: 'fac_PedidosDetalle',
    timestamps:false,
});
module.exports = PedidoDetalle;
