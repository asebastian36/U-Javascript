/*
  Funcion callback, funcion que pasa como argumento a otra funcion
  llamar a una funcion dentro de otra funcion.
*/

//  las funciones se ejecutan en orden secuencial
function simple() {
  console.log("soy una funcion simple");
}

function miFuncion() {
  console.log("soy la otra funcion");
}

//  funcion de tipo callback

//  llamada a la funcion
function imprimir(mensaje) {
  
//  llamada por referencia
//  let imprimir = function() {
  console.log(mensaje);
}

function sumar(x, y, funcionCallback) {
  let res = x + y;
  funcionCallback("resultado de la suma:" + res);
}

//  aqui se llama al metodo con callback
sumar(5, 200, imprimir);