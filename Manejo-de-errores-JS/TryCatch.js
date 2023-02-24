'use strict'
//  primer paso activar el modo estricto

//  para evitar el error usar un try catch
try {
  //  let x = 10;
  x = 10;
  miFuncion();
  //  para arrojar una nueva excepcion
  throw "mi error";
} catch(error) {
  //  atrapamos el fallo en la variable error y mandamos continuamos... a salida
  console.log("continuamos...");
  //  finally es opcional
} finally {
  //  siempre me ejecuto
  console.log("termina la revision de errores");
}