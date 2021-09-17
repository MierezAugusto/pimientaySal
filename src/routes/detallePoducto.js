var express = require('express');
var router = express.Router();
const {detalle} = require('../controllers/detalleControllers')

/* GET users listing. */
router.get('/detalleProducto',detalle );
router.get('/detalleProducto/:id',detalle );

module.exports = router;
