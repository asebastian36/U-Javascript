// 
let dato = "18x";
let numero = Number(dato);

//  funcion para saber si la variable esta almacenando un valor no numerico
if(isNaN(dato)) {
    console.log("si esta guardando un NaN");
} else {
    console.log("Es un numero");
    let resultado = (numero >= 0) ? "es un numero positivo" : "es un numero negativo";
}

//  sigue siendo de tipo numero
console.log(typeof numero);

//  pero su valor es NaN = not a number
console.log(numero);