# Operador incremento y decremento
El operador de incremento y decremento se utiliza para aumentar o disminuir el valor de una variable en una unidad.

## Existen dos tipos de operadores de incremento y decremento:

* El operador de incremento `++` aumenta el valor de una variable en 1. Por ejemplo, si la variable `x` tiene el valor de 5, `x++` cambiaría el valor de `x` a 6.
* El operador de decremento "`--`" disminuye el valor de una variable en 1. Por ejemplo, si la variable `x` tiene el valor de 5, `x--` cambiaría el valor de `x` a 4.

Además, los operadores de incremento y decremento también **pueden colocarse antes o después de la variable, lo cual tiene un impacto en el orden de evaluación de la expresión:**

El operador de incremento/decremento colocado antes de la variable (prefijo) se evalúa primero y luego se utiliza el valor resultante.

El operador de incremento/decremento colocado después de la variable (sufijo) se utiliza el valor original de la variable y luego se evalúa el operador.

**Ejemplo:**
```java
int x = 5;
x++; // x = 6
++x; // x = 7
x--; // x = 6
--x; // x = 5
```

> Es importante mencionar que estos operadores son utilizados generalmente en lenguajes de programacion como C, C++, Java, entre otros.