//  ejemplo estructuca switch
let numero = 3;
let numeroTexto = "valor desconocido";

switch (numero) {
    case 1:
        numeroTexto = "1"; 
        console.log("1");
        break;

    case 2:
        numeroTexto = "2";
        console.log(numeroTexto);
        break;
    
    case 3:
        numeroTexto = "3";
        console.log(numeroTexto);
        break;
    default:
        console.log("numero no reconocido");
        break;
}

//  ejercicio estacion en switch:
let mes = 4;

switch (mes) {
    case 1: case 2:  case 12: 
        console.log("invierno");
        break;

    case 3: case 4: case 5:
        console.log("primavera");
        break;

    case 6: case 7: case 8:
        console.log("verano");
        break;

    case 9: case 10: case 11:
        console.log("otono");
        break;
    default:
        console.log("Error");
        break;
}

//  comparacion estricta se emplea en switch