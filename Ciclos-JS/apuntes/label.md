# Labels

En JavaScript, una etiqueta (o "label") es una forma de dar un nombre a un bloque de código. Las etiquetas se pueden utilizar con los bucles while, do-while y for para permitir que el código salte a una etiqueta específica dentro del bloque de código en lugar de simplemente continuar con la siguiente iteración del bucle.

Para crear una etiqueta, se escribe el nombre de la etiqueta seguido de dos puntos (:) antes del cuerpo del bucle.

Por ejemplo:

```js
let i = 0;
myLabel: while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
        break myLabel;
    }
}
```

En este ejemplo, hemos creado una etiqueta llamada "myLabel" para el bucle while. Dentro del bucle, hemos incluido una condicional que comprueba si "i" es igual a 5. Si se cumple, utilizamos la instrucción break para salir del bucle "myLabel" y continuar con el código fuera del bucle.

También existe la instrucción continue con la cual se puede saltar a la siguiente iteración del bucle.

```js
let j = 0;
myLabel: while (j < 10) {
    j++;
    if (j === 5) {
        continue myLabel;
    }
    console.log(j);
}
```

En este caso, cuando j sea igual a 5 no se imprimirá 5 en consola, sino que se saltará a la siguiente iteración del bucle.

Es importante mencionar que el uso de etiquetas en JavaScript es una característica menos común y puede complicar el código. Es recomendable evitar su uso si no es necesario.
