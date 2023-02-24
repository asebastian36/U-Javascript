//  activacion del modo strict se debe poner en la primera linea 
//  o en la definicion de una funcion
"use strict"

//  para ver errores ya sea al utilizar funciones o variables que no sean declarado
//  let x; 
x = 10;
console.log(x);

miFuncion();

function miFuncion() {
  //  let y;
  y = 15;
  console.log(y);
}