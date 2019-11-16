let Sequelize = require('sequelize');
const db = require('../config/database');
const PedidoDetalle = require('./PedidoDetalle');

const Pedido = db.define('fac_pedidos', {
    Id: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true },
     Fecha:Sequelize.STRING,
     IdCliente:Sequelize.INTEGER,
     IdVendedor:Sequelize.INTEGER,
     Numero:Sequelize.STRING,
     Notas:Sequelize.STRING,
     CreadoPor:Sequelize.STRING,
     FechaHoraCreacion:Sequelize.STRING,
     ModificadoPor:Sequelize.STRING,
     FechaHoraModificacion:Sequelize.STRING,
     Confirmado:Sequelize.INTEGER,
     ConfirmadoPor:Sequelize.STRING,
     FechaHoraConfirmacio:Sequelize.STRING,
     totalPedido:Sequelize.DOUBLE,

},{
    tableName: 'fac_pedidos',
    timestamps:false,
});
Pedido.Detalles = Pedido.hasMany(PedidoDetalle);
module.exports = Pedido;
