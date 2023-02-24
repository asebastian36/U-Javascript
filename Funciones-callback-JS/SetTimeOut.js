//  objetivo de funciones callback: se utilizan en procesos que se ejecutan de manera asincrona
//  realizar varios procesos por separado: asincrona

//  llamadas asincronas con uso setTimeOut
function callback() {
  console.log("saludo asincrono despues de 30 segundos");
}

//  recibe una funcion callback y se ejecute en cierto tiempo
setTimeout( callback, 30000 );// tiempo en milisegundos 30s

//  recibiendo una funcion
setTimeout( function() {console.log("saludo asincrono 2")}, 3000 );

//  recibiendo una funcion flecha
setTimeout( () => console.log("saludo asincrono 3"), 4000 );