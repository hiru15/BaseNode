"use strict"
/* Libreria MongoDB */
var mongoose = require('mongoose')
/* Se cargar Express */
var app = require('./app')
/* Definicion de Puerto */
var port = process.env.PORT || 1501;
/* Conexion a MongoDb */
mongoose.connect("mongodb://localhost:27017/mongodb", {useNewUrlParser: true}, (error, respuesta) => {
	if (error) {
	  throw error;
	} else {
		app.listen(port, function(){
			console.log("servidor del ApiRest en http://localhost:"+port)
		})
	}
})