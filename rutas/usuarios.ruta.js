'use strict'

var express = require('express')
/* Se dbe cargar el controlador */
var controladorUsuarios = require('../controladores/usuarios.controlador.js')
/* Se crean la variables para asignar rutas */
var api = express.Router();

api.get('/hello', controladorUsuarios.holaMundo)

module.exports = api; 