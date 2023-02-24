//  retornan booleanos
let a, b, c;
a = 3, b = 2, c = "3";

//  se revisa el valor sin importar el tipo

//  hizo la conversion del 3 en string a numero
let z = a == c;
console.log(z);

//  revisa los valores pero tambien el tipo
//  retorno false porque la comparacion se hizo con tipos distintos
z = a === c;
console.log(z);

//  operadores de diferencia
z = a != c;
console.log(z);

//  operador de diferencia estricto, evalua los tipos
z = a !== c;
console.log(z)