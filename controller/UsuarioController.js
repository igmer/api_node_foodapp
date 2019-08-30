const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Usuario = require('../models/Usuario');


router.get('/login', (req, res) =>

    Usuario.findOne({
        where: {
            usuario: req.query.usuario,
            password: req.query.password
        }
    })
        .then(usuario => {
            console.log(usuario);
            res.json({
                statusCode:200,
                data:usuario
            })
        })
        .catch(err => console.log(err))
);

module.exports = router;