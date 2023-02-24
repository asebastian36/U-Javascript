//  definimos la promesa
let promesa = new Promise( (miFuncionResolved) => {
  console.log("inicio de la promesa");
  setTimeout( () => miFuncionResolved("Saludos desde resolved con time out"), 5000);
  console.log("fin de la promesa");
});

promesa.then(valor => console.log(valor));

/*
  Una promesa puede trabajar con una promesa dentro de otra, puede recibir una respuesta de otra promesa
  y procesos encadenados asincronos
*/