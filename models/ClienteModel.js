let Sequelize = require('sequelize');
const db = require('../config/database');
let Departamento = require('./Departamento');
const Clientes = db.define('fac_Clientes', {
    id: {type: Sequelize.STRING, primaryKey: true, autoIncrement: true},
    Nombre: Sequelize.STRING,// [varchar](150) NOT NULL,
    RazonSocial: Sequelize.STRING,// [varchar](150) NOT NULL,
    Nrc: Sequelize.STRING,// [varchar](20) NOT NULL,
    Nit: Sequelize.STRING,// [varchar](20) NOT NULL,
    OtroDocumento: Sequelize.STRING,// [varchar](50) NOT NULL,
    Giro: Sequelize.STRING,// [varchar](100) NOT NULL,
    IdDepartamento: Sequelize.STRING,// [varchar](3) NOT NULL,
    IdMunicipio: Sequelize.STRING,// [varchar](6) NOT NULL,
    Direccion: Sequelize.STRING,// [varchar](800) NOT NULL,
    Telefonos: Sequelize.STRING,// [varchar](100) NOT NULL,
    CorreoElectronico: Sequelize.STRING,// [varchar](100) NOT NULL,
    DiasCredito: Sequelize.STRING,// [smallint] NOT NULL,
    IdVendedor: Sequelize.INTEGER,// [int] NOT NULL,
    AplicaRetencion: Sequelize.STRING,// [bit] NOT NULL,
    LimiteCredito: Sequelize.STRING,// [decimal](18, 2) NOT NULL,
    IdPrecio: Sequelize.INTEGER,// [int] NOT NULL,
    Contacto1: Sequelize.STRING,// [varchar](100) NOT NULL,
    InfoContacto1: Sequelize.STRING,// [varchar](50) NOT NULL,
    Contacto2: Sequelize.STRING,// [varchar](100) NOT NULL,
    InfoContacto2: Sequelize.STRING,// [varchar](50) NOT NULL,
    IdTipoComprobante: Sequelize.STRING,// [int] NOT NULL,
    IdRuta: Sequelize.INTEGER,// [int] NOT NULL,
    Activo: Sequelize.STRING,// [bit] NOT NULL,
    CreadoPor: Sequelize.STRING,// [varchar](20) NOT NULL,
    FechaHoraCreacion: Sequelize.STRING,// [datetime] NOT NULL,
    ModificadoPor: Sequelize.STRING,// [varchar](20) NOT NULL,
    FechaHoraModificacion: Sequelize.STRING,// [datetime] NULL,
    eliminado: Sequelize.INTEGER,// [int] NULL,
}, {
    tableName: 'fac_Clientes',
    timestamps: false

});
module.exports = Clientes;