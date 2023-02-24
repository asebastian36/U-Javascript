# Paso por referencia

El paso por referencia es una forma de pasar un argumento a una función en la que se pasa una referencia al objeto en lugar de una copia del valor. Esto significa que cualquier cambio realizado a la variable dentro de la función afectará al valor de la variable fuera de la función. Por ejemplo, si se pasa una lista a una función y se agrega un elemento a esa lista dentro de la función, el valor de la lista original fuera de la función también cambiará. En algunos lenguajes de programación, como C++, C#, Java, cuando pasamos un objeto por referencia, se puede acceder y modificar directamente el objeto y su estado.

## Ejemplo

```js
// Ejemplo de paso por referencia
function agregar_elemento(lista) {
    lista.push(4);
    console.log("Dentro de la función:", lista);
}

let mi_lista = [1, 2, 3];
agregar_elemento(mi_lista);
console.log("Fuera de la función:", mi_lista);
```
