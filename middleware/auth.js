'use strict'

var token = require('jwt-simple');
var momento = require('moment')
var claveSecreta = 'sicom'

exports.autenticacion = function (req, res, next){
	//Pasamos el token por cabezera de autentificacion
	if(!req.headers.authorization){
		return res.status(403).send({mensaje: "La peticion no trae la autenticacion"})
	}else {
		//Quitar las comillas simple y dobles al token
		var tokenEnviado = req.headers.authorization.replace(/['""]+/g,'')
		//setencia de manejo de excepciones
		try {
			var cargarToken = token.decode(tokenEnviado, claveSecreta);
			//Comparamos la fecha actual con la del token
			if(cargarToken.exp <= momento().unix()){
				return res.status(403).send({mensaje: "El token a expirado"})
			}
		}catch(excepcion){
           console.log(excepcion)
           return res.status(403).send({mensaje:"El Token no es valido"})
		}
		next();
	}
}