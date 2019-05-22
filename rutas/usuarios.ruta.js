'use strict'

var express = require('express')
/* Se dbe cargar el controlador */
var controladorUsuarios = require('../controladores/usuarios.controlador.js')
/* Se crean la variables para asignar rutas */
var api = express.Router();

var md_aut = require("../middleware/aut.js")

api.get('/hello', controladorUsuarios.holaMundo)
api.get('/token', md_aut.autenticacion, controladorUsuarios.holaMundo)

module.exports = api; 