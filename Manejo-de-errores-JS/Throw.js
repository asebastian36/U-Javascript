'use strict'
let resultado = "Hola";

try {
  //  aqui creamos una excepcion pero solo definimos el primer console.log los demas seran undefined
  if( isNaN(resultado)) throw "No es un numero";
  else if( resultado === '') throw "Es cadena vacia";
  else if( resultado >= 0) throw "valor positivo";
  else if( resultado < 0) throw "valor negativo";
} catch(error) {
  //  division por partes del error
  console.log(error); //  manda el nombre y el mensaje de error
  //  console.log(error.name);//  solo el nombre
  //  console.log(error.message);// solo el mensaje
} finally {
  console.log("Termina la revision de errores");
}