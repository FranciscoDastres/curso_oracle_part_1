alert("bienvenido a nuestro sitio web");

let nombre = "Lua";

const edad = 25;

const saldoDisponible = 1000;

alert("!Error! Completa todos los campos");

let mensajeDeError = "Error! Completa todos los campos";
alert(mensajeDeError);

let ingresarNombre = prompt("Ingresa tu nombre");
let ingresarEdad = prompt("Ingresa tu edad");

if (ingresarEdad >= 18 ){
    alert("¡Puedes obtener tu licencia de conducir!. " + ingresarNombre +"Felicidades!");
}