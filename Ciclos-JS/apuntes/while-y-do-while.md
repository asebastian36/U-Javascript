# Diferencias entre while y do while

La principal diferencia entre un bucle `while` y un bucle `do-while` es la manera en que se comprueba la condición.

Un bucle `while` comprueba la condición al principio de cada iteración. Si la condición es falsa, el bucle se detiene. Si la condición es verdadera, se ejecuta el cuerpo del bucle y luego se vuelve a comprobar la condición.

Por otro lado, un bucle `do-while` ejecuta el cuerpo del bucle antes de comprobar la condición. Entonces, si la condición es falsa, el bucle se detiene. Si la condición es verdadera, se vuelve a ejecutar el cuerpo del bucle y se vuelve a comprobar la condición.

En resumen, un bucle `while` comprueba la condición antes de ejecutar el cuerpo del bucle, mientras que un bucle `do-while` ejecuta el cuerpo del bucle antes de comprobar la condición.

Claro, aquí tienes un ejemplo de cómo se usa un bucle `while` y un bucle `do-while` en JavaScript:

```js
// Ejemplo de bucle while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Ejemplo de bucle do-while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

```

En ambos casos, el código imprime los números de 0 a 4 en la consola. Sin embargo, el bucle `while` comprueba la condición (i < 5) antes de ejecutar el cuerpo del bucle, mientras que el bucle `do-while` ejecuta el cuerpo del bucle antes de comprobar la condición (j < 5).

Es importante mencionar que el bucle `do-while` se ejecuta al menos una vez, independientemente del valor de la condición, mientras que el bucle `while` se ejecuta solamente si se cumple la condición.
