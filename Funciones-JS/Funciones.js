//  hoisting
let resultado = miFuncion(150, 1000);

//  definicion de una funcion
function miFuncion(a, b) {
  //  metodo de la funcion para saber cuantos argumentos tiene una funcion
  console.log(arguments.length);
  console.log("Hola soy un mensaje de miFuncion");
  console.log(a + b);
  return a + b;
}

//  llamada a la funcion
//  miFuncion(5, 4);

//  funciones de tipo expresion o anonimas

//  declaracion
let alojoFuncion = function (a, b) {
  return a + b;
};

resultado = alojoFuncion(500, 78);
console.log(resultado);

//  funciones self invoking, tambien es una funcion anonima pero se puede llamar a si misma
//  no es reutilizable y ya no se podra llamar despues de ejecutarse
(function (a, b) {
  console.log(
    "Ejecutando la funcion self invoking" + " " + "la suma es " + (a + b)
  );
})(5, 4);

//  funciones como objeto
console.log(typeof miFuncion);

//  metodo toString, convierte nuestra funcion en texto
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//  las funciones son objetos, tienen propiedades y metodos

//  funciones flechas 
const sumarFuncionFlecha = (a, b) => a + b;

//  llamar a la funcion
resultado = sumarFuncionFlecha(10, 25);
console.log(resultado);

//  parametros y argumentos
//  cuando definimos una funcion son parametros
//  cuando llamamos una funcion son argumentos

let multiplicar = function (a, b) {
  //  arguments es un arreglo de argumentos
  console.log(arguments[0]);
  console.log(arguments[1]);
  //  no hay error de indices
  console.log(arguments[2]);
  return a * b;
}

//  js es flexible y al llamar una funcion si no pasamos todos los argumentos no hay error
resultado = multiplicar(5);
console.log(resultado);