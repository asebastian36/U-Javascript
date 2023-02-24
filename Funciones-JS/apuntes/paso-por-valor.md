# Paso por valor

El paso por valor es una forma de pasar un argumento a una función en la que se pasa una copia del valor del argumento en lugar de pasar el argumento mismo. En este caso, cualquier cambio realizado a la variable dentro de la función no afectará al valor de la variable fuera de la función. Por ejemplo, si se pasa un número a una función y se cambia ese número dentro de la función, el número original fuera de la función no se verá afectado.

## ejemplo

```js
// Ejemplo de paso por valor
function incrementar(numero) {
    numero += 1;
    console.log("Dentro de la función:", numero);
}

let n = 5;
incrementar(n);
console.log("Fuera de la función:", n);
```
