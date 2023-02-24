//  las operaciones se hacen de izquierda a derecha
let a, b, c, d;
a = 1, b = 2, c = 3, d = 4;

//  ejemplos de operaciones donde se ve de manera practica
//  el manejo de operaciones
let e = a * b + c / d;
console.log(e);

let f = c + a * b / d;
console.log(f);

e = a * (b + c) / d;
console.log(e);

f = (c + a) * b / d;
console.log(f);