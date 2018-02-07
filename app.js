const express = require("express");
const app = express(); // instancia de express

// archivos estaticos para la app
app.use(express.static(__dirname + '/public')); 

// peticion GET para el root
app.get("/", (req,res) => { // arrow function
	return res.sendFile(__dirname + '/public/index.html');
});

// regex para atrapar un usuario
app.get('/*', (req,res) => {
	return res.redirect('/');
});

module.exports = app;