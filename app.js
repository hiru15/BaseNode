'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
/* Cargas de Rutas */
var rutaUsuario = require('./rutas/usuarios.ruta.js')
/* Cabezeras */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.header("Allow", "GET, POST, PUT, DELETE")
    if (req.method === "OPTIONS") 
        res.send(200);
    else  next();
})
/* Uso de Rutas*/
app.use('/cms', rutaUsuario)
/* Exportacion del modulo */
module.exports = app