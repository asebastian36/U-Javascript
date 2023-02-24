let miFuncion = function () {
  console.log("saludos desde mi funcion");
}

//  funcion flecha
//  nota no se aplica el hoisting a la funcion flecha por el uso de let,
//  aunque tambien se puede usar const pero tampoco se aplicara el hoisting
let miFuncionFlecha = () => {
  console.log("saludos desde mi funcion flecha");
}

//  sintaxis resumida
const funcionFlecha = () => console.log("soy otra funcion flecha")

//  funcion flecha que retorna una cadena
const saludar = () => {
  return "saludos con retorno de una funcion flecha";
}

//  retornar cadena resumida
const despedir = () => "despedida desde funcion flecha";

//  para regresar un objeto de una funcion flecha
const regresaObjeto = () => ( {atributo: "soy un atributo", atributo2: 2  } );

//  funcion flecha con parametros si solo hay un parametro se pueden ahorrar los parentesis
//  const funcionParametros = (mensaje) => console.log(mensaje);
const funcionParametros = mensaje => console.log(mensaje);

//  funcion flecha con multiples parametros
const suma = (x, y) => x + y;

//  llamadas a las funciones
miFuncion();
miFuncionFlecha();
funcionFlecha();
console.log( saludar() );
console.log( despedir() );
console.log( regresaObjeto() );
funcionParametros("hola mundo");
console.log( suma(5, 19) );