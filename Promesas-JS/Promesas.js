//  una promesa es codigo que tiene varios estados
//  tiene un estado resolve se procesa con .then() y rejected con .catch()

// sintaxis basica de promesa
//  tiene como parametros dos funciones callback en una funcion flecha

//  declaracion de la promesa
let miPromesa = new Promise((resolve, rejected) => {
  //  simula los caminos
  let expresion = true;

  if(expresion) resolve("Se resolvio");
  else rejected("Se rechazo");
});

//  llamar a la promesa resolve y rejected se sustituyen con funciones flecha separadas por coma

//  procesar de diferentes maneras

//  opcion 1 con catch como segundo argumento:
miPromesa.then( valor => console.log(valor), error => console.log(error) );


//  opcion 2 llamando el metodo catch:
//  miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));
