'use strict'

//Requerimos dependencio jwt-simple para crear el toke
var token = require('jwt-simple')
//moment permite crear la fecha y expiracion de la session
var momento = require('moment')

var claveSecreta = 'sicom'

exports.crearToken = function (usuario){
	//datos a codificar en token
	var cargarToken = {
      //Se crea para guardar el id del objeto
	  /*sub: usuario._id,
	  nombre: usuario.usuario,*/
	  //fecha actual unix
	  now: momento().unix(),
	  exp: momento().add(10,"minutes").unix()
	}
    //Devolvemos el token Codificado
    return token.encode(cargarToken, claveSecreta)
}