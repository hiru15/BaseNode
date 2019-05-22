'use strict'

var token = require("../middleware/token.js")

function holaMundo(req, res) {
    res.status(200).send({ token: token.crearToken(),  mensaje: "Hola Mundo" })
}

function ValidToken(req, res) {
    res.status(200).send({ mensaje: "Token Valido Perro !" })
}

module.exports = {
    holaMundo,
    ValidToken
}