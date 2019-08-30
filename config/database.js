const Sequelize = require('sequelize');
const fs = require('fs');
module.exports = new Sequelize(
    'food','sa','12345',{
        host: '192.168.43.47',
        dialect: 'mssql',
        instanceName: 'SQLEXPRESS',

    }
);