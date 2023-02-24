//  se necesita una variable o expresion para terminar un ciclo
let contador = 0;

while (contador < 3) {
    //  accion a repetir o iterar
    console.log(contador);
    //  accion de aumento para evitar bucles infinitos
    contador++;
}

console.log("fin del ciclo while");