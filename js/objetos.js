var Mexico;

function LlamarMexico (Mexico){
	$.ajax({
	  url: "http://api.openweathermap.org/data/2.5/weather?q=Mexico&appid=bd82977b86bf27fb59a04b61b657fb6f&units=metric&lang=es",
	  success: function( data ) { 

	  	$( "#Clima" ).html("El clima de hoy: "+data.weather[0].description);
	    $( "#Temperatura" ).html("La temperatura es: "+data.main.temp);
	    $( "#Presion" ).html("La presión es: "+data.main.pressure);
	    $( "#Humedad" ).html("La humedad es: "+data.main.humidity);
	    $( "#Viento" ).html("La velocidad del viento: "+data.wind.speed);
	  }
	});}

var NewYork;

$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=bd82977b86bf27fb59a04b61b657fb6f&units=metric&lang=es",
  success: function( data ) { 

  	$( "#Clima" ).html("El clima de hoy: "+data.weather[0].description);
    $( "#Temperatura" ).html("La temperatura es: "+data.main.temp);
    $( "#Presion" ).html("La presión es: "+data.main.pressure);
    $( "#Humedad" ).html("La humedad es: "+data.main.humidity);
    $( "#Viento" ).html("La velocidad del viento: "+data.wind.speed);
  }
});

var Barcelona;

$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=bd82977b86bf27fb59a04b61b657fb6f&units=metric&lang=es",
  success: function( data ) { 

  	$( "#Clima" ).html("El clima de hoy: "+data.weather[0].description);
    $( "#Temperatura" ).html("La temperatura es: "+data.main.temp);
    $( "#Presion" ).html("La presión es: "+data.main.pressure);
    $( "#Humedad" ).html("La humedad es: "+data.main.humidity);
    $( "#Viento" ).html("La velocidad del viento: "+data.wind.speed);
  }
});

var Tokyo;

$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=bd82977b86bf27fb59a04b61b657fb6f&units=metric&lang=es",
  success: function( data ) { 

  	$( "#Clima" ).html("El clima de hoy: "+data.weather[0].description);
    $( "#Temperatura" ).html("La temperatura es: "+data.main.temp);
    $( "#Presion" ).html("La presión es: "+data.main.pressure);
    $( "#Humedad" ).html("La humedad es: "+data.main.humidity);
    $( "#Viento" ).html("La velocidad del viento: "+data.wind.speed);
  }
});

var Sydney;

$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=bd82977b86bf27fb59a04b61b657fb6f&units=metric&lang=es",
  success: function( data ) { 

  	$( "#Clima" ).html("El clima de hoy: "+data.weather[0].description);
    $( "#Temperatura" ).html("La temperatura es: "+data.main.temp);
    $( "#Presion" ).html("La presión es: "+data.main.pressure);
    $( "#Humedad" ).html("La humedad es: "+data.main.humidity);
    $( "#Viento" ).html("La velocidad del viento: "+data.wind.speed);
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