let condicion = true;

if(condicion) {
   console.log("condicion verdadera");
} else {
   console.log("condicion falsa");
}

// ejercicio if/else: numeros
let numero = 3;

if(numero == 1) {
   console.log("numero 1.");
} else if(numero == 2) {
   console.log("numero 2");
} else if(numero == 3) {
   console.log("numero 3")
} else {
   console.log("numero no reconocido");
}

// otro ejercicio: estaciones
let mes = 5;

if (mes == 1 || mes == 2 || mes == 12) {
   console.log("invierno");
} else if (mes == 3 || mes == 4 || mes == 5) {
   console.log("primavera");
} else if (mes == 6 || mes == 7 || mes == 8) {
   console.log("verano");   
} else if (mes == 9 || mes == 10 || mes == 11) {
   console.log("otono");
} else {
   console.log("error");
}

// ejercicio: calculo hora del dia
/* instrucciones:
   6am-11am - Buenos dias
   12pm-18pm - Buenas tardes
   19pm-24pm - Buenas noches
   0am-6am - Durmiendo
*/

let hora = 22;

if (hora >= 12 && hora <= 18) {
   console.log("Buenas tardes");
} else if (hora >= 6 && hora <= 11) {
   console.log("Buenos dias");
} else if (hora >= 19 && hora <= 24) {
   console.log("Buenas noches");
} else if (hora >= 0 && hora <= 6) {
   console.log("Durmiendo");
} else {
   console.log("error");
}