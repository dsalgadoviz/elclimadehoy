$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=bd82977b86bf27fb59a04b61b657fb6f",
  success: function( data ) {
    $( "#AquíEstoy" )
    .html(data.weather[0].main);
  }
});


















/*
function saludar() {
//	var nombreEl = document.getElementById("nombre");
//	var saludoEl = document.getElementById("saludo");

//	saludoEl.innerHTML = "<span>Hola " + nombreEl.value + "</span>";

	var nombre = $("#nombre").val();
	var saludo = $("#saludo").html("<span>Hola " + nombre + "</span>");
}
*/






/*
document.title = "Desafío Latam";


//	<h1 id="header" class="main-header">HTML5!</h1>
var encabezado = document.getElementById("header");
console.log(encabezado);
*/












/*
var saludo = "Hola mundo!";

function imprimirSaludo() {
	console.log(this.saludo);
}


var greetings = {
	saludo: "Hello world!",
	saludar: imprimirSaludo
}


var saluti = {
	saludo: "Ciao mondo!",
	saludar: imprimirSaludo
};


greetings.saludar();
saluti.saludar();
imprimirSaludo();




function mostrar() {
	return this;
}


// Uso "avanzado" de JS (call):
console.log(mostrar.call(this));
console.log(mostrar.call(greetings));
console.log(mostrar.call(saluti));
*/









/*
function imprimePersonaje(personaje) {
	console.log("Soy " + personaje.nombre + " y tengo: " +
		personaje.numVidas + " vidas, " +
		"modo: " + personaje.modo + ", " +
		"y traje: " + personaje.traje);
}

function crearPersonaje(nombre, vidas, modo, traje) {
	var personaje = {
		nombre: nombre,
		numVidas : vidas,
		modo: modo,
		traje: traje
	};

	imprimePersonaje(personaje);

	return personaje;
}

var mario = crearPersonaje("Mario", 3, "normal", "clásico");
var luigi = crearPersonaje("Luigi", 3, "estrella", "rana");


mario.modo = "estrella";
imprimePersonaje(mario);

luigi.traje = "normal";
imprimePersonaje(luigi);


var wario = Object.create(mario);
wario.nombre = "Wario";
imprimePersonaje(wario);


imprimePersonaje(mario);
imprimePersonaje(luigi);
*/












/*
var silla = {
	patas: 4,
	respaldo: true,
	cojines: true
};

console.log(silla);

var mesa = {};

//console.log(mesa);

mesa.patas = 4;
mesa.respaldo = false;
mesa.cojines = false;

console.log(mesa);
*/