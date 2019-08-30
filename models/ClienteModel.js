let Sequelize = require('sequelize');
const db = require('../config/database');
let Departamento = require('./Departamento');
const Clientes = db.define('fac_Clientes', {
        id:{ type: Sequelize.STRING, primaryKey: true,autoIncrement:true},
        Nombre:Sequelize.STRING,
        RazonSocial:Sequelize.STRING,
        Nrc:Sequelize.STRING,
        Nit:Sequelize.STRING,
        OtroDocumento:Sequelize.STRING,
        Giro:Sequelize.STRING,
        IdDepartamento:Sequelize.STRING,
        IdMunicipio:Sequelize.STRING,
        Direccion:Sequelize.STRING,
        Telefonos:Sequelize.STRING,
        Fax:Sequelize.STRING,
        CorreoElectronico:Sequelize.STRING,
        DiasCredito:Sequelize.SMALLINT,
        IdVendedor:Sequelize.INTEGER,
        AplicaRetencion:Sequelize.INTEGER,
        LimiteCredito:Sequelize.DECIMAL,
        IdPrecio:Sequelize.INTEGER,
        Contacto1:Sequelize.STRING,
        InfoContacto1:Sequelize.STRING,
        Contacto2:Sequelize.STRING,
        InfoContacto2:Sequelize.STRING,
        IdTipoComprobante:Sequelize.INTEGER,
        IdRuta:Sequelize.STRING,
        CreadoPor:Sequelize.STRING,
        FechaHoraCreacion:Sequelize.STRING,
        ModificadoPor:Sequelize.STRING,
        FechaHoraModificacion:Sequelize.STRING,
        eliminado:Sequelize.INTEGER,
        IdCliente:Sequelize.STRING
},{
    tableName: 'fac_Clientes',
        timestamps:false

});
module.exports = Clientes;