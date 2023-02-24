class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
  //  sobreescribiendo metodo de Object
  toString() {
    return this.nombreCompleto();
  }

}

//  ejemplo de herencia
class Empleado extends Persona {
  //  constructor
  constructor(nombre, apellido, departamento) {
    //  acceder al constructor de la clase padre es requerido para inicializar los atributos heredados
    super(nombre, apellido);
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }

  //  aplicacion de sobreescritura y metodo super
  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }
  //  sobreescribiendo metodo de la clase padre
  toString() {
    return this.nombreCompleto();
  }
}

//  instancias de clase padre e hija
let persona = new Persona("Angel", "Franco");
//  console.log(persona);

let empleado = new Empleado("Pablo", "Porro", "UsU");
//  console.log(empleado);

//  acceso a metodo set de la clase padre desde la clase hija
empleado.nombre = "Pedro";
//  console.log( empleado.nombreCompleto() );

//  acceso a toString
console.log( persona.toString() );

//  aplicacion de polimorfismo multiples formas en tiempo de ejecucion dependiendo la referencia con el metodo toString
console.log( empleado.toString() );

//  todas las clases heredan de la clase Object, la clase Object tiene varios metodos
//  o tambien pueden estar definidos en su atributo prototype.
//  definido en prototype metodo toString