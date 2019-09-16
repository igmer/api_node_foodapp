const express = require('express');
const router = express();
const db = require('../config/database');
const Cliente = require('../models/ClienteModel');
const Municipio = require('../models/Municipio');
const Departamento = require('../models/Departamento');
const Ruta = require('../models/Ruta');
router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/clientebyid', (req, res) =>

    Cliente.findByPk(req.query.idCliente)
        .then(cliente => {
            console.log(cliente);
            res.json({
                statusCode:200,
                data:cliente
            })
        })
        .catch(err => console.log(err))
);
router.post('/createcliente', function(req, res)  {
    let {
        idCliente,Nombre,RazonSocial,Nrc,Nit,
        OtroDocumento,Giro,IdDepartamento,
        IdMunicipio,Direccion,Telefonos,
        CorreoElectronico,Fax, DiasCredito,IdVendedor,AplicaRetencion,
        LimiteCredito,IdPrecio, Contacto1, InfoContacto1,
        Contacto2, InfoContacto2, IdTipoComprobante, IdRuta,
        CreadoPor, FechaHoraCreacion
    } = req.body;
    console.log(idCliente);

    Cliente.create({
        idCliente,Nombre,RazonSocial,Nrc,Nit,
        OtroDocumento,Giro,IdDepartamento,
        IdMunicipio,Direccion,Telefonos,
        CorreoElectronico,Fax, DiasCredito,IdVendedor,AplicaRetencion,
        LimiteCredito,IdPrecio, Contacto1, InfoContacto1,
        Contacto2, InfoContacto2, IdTipoComprobante, IdRuta,
        CreadoPor, FechaHoraCreacion
    })
        .then(customer => res.json({
            status: 200,
            data: "Exito al registrar"
        }))
        .catch(err => res.json({
            status: 406,
            data: err
        }))
});
router.put('/createcliente', function(req, res)  {
    console.log(('siii'))
    let {
        id,Nombre,RazonSocial,Nrc,Nit,
        OtroDocumento,Giro,IdDepartamento,
        IdMunicipio,Direccion,Telefonos,
        CorreoElectronico,Fax, DiasCredito,IdVendedor,AplicaRetencion,
        LimiteCredito,IdPrecio, Contacto1, InfoContacto1,
        Contacto2, InfoContacto2, IdTipoComprobante, IdRuta,
        CreadoPor, FechaHoraCreacion
    } = req.body;
    console.log(id)

    Cliente.update({
        Nombre,RazonSocial,Nrc,Nit,
        OtroDocumento,Giro,IdDepartamento,
        IdMunicipio,Direccion,Telefonos,
        CorreoElectronico,Fax, DiasCredito,IdVendedor,AplicaRetencion,
        LimiteCredito,IdPrecio, Contacto1, InfoContacto1,
        Contacto2, InfoContacto2, IdTipoComprobante, IdRuta,
        CreadoPor, FechaHoraCreacion
    },{where:{id:id}})
        .then(customer => res.json({
            status: 200,
            data: "Exito al registrar"
        }))
        .catch(err => res.json({
            status: 406,
            data: err
        }))
});
router.get('/clientegetall', (req, res) =>
    db.query("SELECT f.* ,d.Nombre as departamento, m.Nombre as municipio from fac_clientes f " +
        "INNER JOIN adm_Departamentos d on f.IdDepartamento = d.IdDepartamento "+
        "INNER JOIN adm_Municipios m on f.IdMunicipio = m.IdMunicipio")
        .then(cliente => {
            console.log(cliente);
            res.json({
                statusCode:200,
                data:cliente
            })
        })
        .catch(err => console.log(err))

);
router.get('/setting', (req, res) => {
        const departamentos = Departamento.findAll();
        const municipios = Municipio.findAll();
        const ruta = Ruta.findAll();
        Promise.all([departamentos, municipios,ruta])
            .then(response => {
                res.json({
                    dataDepto: response[0],
                    dataMun: response[1],
                    dataRuta: response[2]
                })
            }).catch(err => {
            console.log(err);
        });
    }
);


module.exports = router;
