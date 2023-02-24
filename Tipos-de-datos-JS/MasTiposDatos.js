//  tipo de dato booleano o tipo bandera
var boolean = true;
console.log(typeof boolean)

//  las funciones son un tipo de dato en js

//  tipo de dato function
function miFuncion() {

}

console.log(typeof miFuncion)

//  tipo de dato symbol
var simbolo = Symbol();
//  opcion 2: var simbolo = Symbol("mi simbolo")

console.log(typeof simbolo);

//  tipo clase es una function
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//  tipo de dato undefined

//  dos maneras de definir undefined
var x;
x = undefined;

console.log(x);
console.log(typeof x);

//  tipo de dato null
var y = null;

//  si queremos saber el valor de un tipo null
console.log(y);

//  el tipo de dato es un tipo object
console.log(typeof y);