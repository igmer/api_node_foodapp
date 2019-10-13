let Sequelize = require('sequelize');
const db = require('../config/database');
const PedidoDetalle = require('./PedidoDetalle');

const Pedido = db.define('fac_pedidos', {
    Id: { type: Sequelize.INTEGER, primaryKey: true,autoIncrement: true },
     Fecha:Sequelize.STRING,
     IdCliente:Sequelize.INTEGER,
     Nombre:Sequelize.STRING,
     Nrc:Sequelize.STRING,
     Nit:Sequelize.STRING,
     Giro:Sequelize.STRING,
     Direccion:Sequelize.STRING,
     Telefono:Sequelize.STRING,
     IdMunicipio:Sequelize.STRING,
     IdDepartamento:Sequelize.STRING,
     IdTipoComprobante:Sequelize.INTEGER,
     DiasCredito:Sequelize.INTEGER,
     IdVendedor:Sequelize.INTEGER,
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
