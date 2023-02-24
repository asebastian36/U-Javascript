//  ejercicio 1.
let x = 5;
let y = 10;
let z = ++x + y--;

console.log(x);
console.log(y);
console.log(z);

/*
    orden en que se hizo esto:
    ++x, x = 6
    z = 6 + 10
    y--, y = 9
*/

//  ejercicio 2.
let resultado = 4 + 5 * 6 / 3;
 console.log(resultado);

/*
    orden en que se hizo esto:
    5 * 6 = 30
    30 / 3 = 10
    4 + 10 = 14
*/

//  ejercicio 3.
resultado = (4 + 5) * 6 / 3;
console.log(resultado);

/*
    orden en que se hizo esto:
    4 + 5 = 9
    9 * 6 + 54
    54 / 3 = 18
*/