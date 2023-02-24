# Operador ===

En JavaScript, el operador `===` es un operador de igualdad estricta, también conocido como operador de igualdad no desigual. Este operador compara tanto el valor como el tipo de dos expresiones. Si ambas expresiones tienen el mismo valor y son del mismo tipo, el operador devuelve verdadero, de lo contrario devuelve falso.

Por ejemplo:

```js
console.log(1 === 1);  // devuelve true
console.log("hello" === "hello");  // devuelve true
console.log(true === true);  // devuelve true
console.log(1 === "1");  // devuelve false
console.log(null === undefined);  // devuelve false
```

Es importante tener en cuenta que el operador `===` es diferente del operador `==` que es un operador de igualdad suave, que compara solo el valor de las expresiones y no el tipo. El operador `==` realizará una conversión de tipo automática antes de realizar la comparación si los tipos de las dos expresiones son diferentes.

Por ejemplo, el siguiente código devuelve verdadero con el operador `==` pero falso con el operador `===`:

```js
console.log(1 == "1");  // devuelve true
```

En general, se recomienda siempre utilizar el operador `===` para comparaciones de igualdad en JavaScript para evitar confusiones o comportamientos inesperados debido a la conversión automática de tipos.