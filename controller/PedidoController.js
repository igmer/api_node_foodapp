const express = require('express');
const router = express();
const db = require('../config/database');
router.use(express.json());
const Pedido = require('../models/Pedido');
const Checkin = require('../models/Checkin');

const PedidoDetalle = require('../models/PedidoDetalle');
const Categories = Pedido.hasMany(PedidoDetalle, { as: 'detalles' });

router.use(express.urlencoded({ extended: true }));



router.post('/createpedido', function (req, res) {
    let {
        Fecha, IdCliente, Nombre, Nrc, Nit, Giro, Direccion,
        Telefono, IdMunicipio, IdDepartamento, IdTipoComprobante, DiasCredito, IdVendedor,
        Notas, CreadoPor, FechaHoraCreacion, ModificadoPor, FechaHoraModificacion, Confirmado,
        ConfirmadoPor, FechaHoraConfirmacio, totalPedido } = req.body
    let detalles = req.body['pedidoDetalleList']

    Pedido.create({
        Fecha, IdCliente, Nombre, Nrc, Nit, Giro, Direccion, Telefono,
        IdMunicipio, IdDepartamento, IdTipoComprobante, DiasCredito,
        IdVendedor, Notas, CreadoPor, FechaHoraCreacion, ModificadoPor,
        FechaHoraModificacion, Confirmado, ConfirmadoPor, FechaHoraConfirmacio, totalPedido, detalles
    }, {
        include: [{
            association: Categories,
            as: 'detalles'
        }]
    }).then(pedido => res.json({
        data: "exito",
        status: 200

    }))
        .catch(err => res.json({
            status: 406,
            data: err
        }))
});
router.post('/createdetalle', function (req, res) {
    let {
        IdComprobante,
        IdProducto,
        IdPrecio,
        Cantidad,
        Descripcion,
        PrecioVenta,
        PorcDescuento,
        ValorDescuento,
        PrecioUnitario,
        PrecioTotal,
        CreadoPor,
        FHCreacion,
        CantidadConfirmada

    } = req.body;
    //console.log(idCliente);

    PedidoDetalle.create({
        IdComprobante,
        IdProducto,
        IdPrecio,
        Cantidad,
        Descripcion,
        PrecioVenta,
        PorcDescuento,
        ValorDescuento,
        PrecioUnitario,
        PrecioTotal,
        CreadoPor,
        FHCreacion,
        CantidadConfirmada
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
router.post('/createcheckin', function (req, res) {
    let {
        IdCliente,
        IdVendedor,
        Latitud,
        Longitud,
        Pedido,
        Comentario,
        FechaHoraCreacion
    } = req.body;
       
    console.log(IdCliente);

    Checkin.create({
        IdCliente,
        IdVendedor,
        Latitud,
        Longitud,
        Pedido,
        Comentario,
        FechaHoraCreacion
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

module.exports = router;
