let miNumero = "18";

//  es string
console.log(typeof miNumero);

//  conversion
let edad = Number(miNumero);

//  el valor se vuelve numero pero lo guardamos en otra variable
console.log(typeof edad);

if(edad >= 18) console.log("ya puedes votar");
else console.log("aun no puedes votar")

//  mini ejercicio pero con operador ternario
let respuesta = (edad >= 18) ? console.log("ya puedes votar") : console.log("aun no puedes votar");
