'use strict'

function holaMundo(req, res) {
    res.status(200).send({ mensaje: "Hola Mundo" })
}

module.exports = {
    holaMundo
}