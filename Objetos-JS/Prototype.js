//  funcion constructor
function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
//  agregar propiedad a objetos
Persona.prototype.tel;

//  sintaxis si quieres que todos los objetos tengan ese valor por defecto
//  Persona.prototype.tel = "1111";

//  objetos
let hermano = new Persona("Diego Isaac", "Franco Lopez");
//  se tiene que inicializar
hermano.tel = "2222222222";
console.log(hermano);

let yo = new Persona("Angel Sebastian", "Franco Lopez");
yo.tel = "1111111111";
console.log(yo);
