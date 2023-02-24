//  palabra reservada que rompe un ciclo antes de que termine su ejecucion

//  ejemplo con salida de numeros pares:
for (let i = 1; i <= 10; i++) {
    //  obtenemos un numero par
    if(i % 2 == 0)
        console.log(i);
    //  terminamos el ciclo y el if al obtener el primer numero par
    break;
}

console.log("fin adelantado del ciclo");