const Sequelize = require('sequelize');
const fs = require('fs');
module.exports = new Sequelize('Foodapp', 'Admin123', 'Pa$$w0rd', {
    host: 'planilla0321.database.windows.net',
    dialect: 'mssql',    
    dialectOptions: {
        instanceName: 'SQLEXPRESS',
        options:{
            encrypt: true,
        }
    }
    });