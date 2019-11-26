const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Usuario = require('../models/Usuario');


router.get('/login', function(req, res) {

db.query(`SELECT * from usuarios where usuario = '${req.query.usuario}' AND password='${req.query.password}'`,{ type: db.QueryTypes.SELECT })
.then(cliente => {
    console.log(cliente);
    res.json({
        statusCode:200,
        data:cliente
    })
})
.catch(err => console.log(err))
}
);

module.exports = router;