class Persona {
  //  variable estatica de solo lectura
  static get MAX_OBJ() {
    return 5;
  }

  //  atributo fuera del constructor (no estatico)
  email = "valor por default";

  //  los atributos no estaticos si se llaman desde la clase seran undefined

  constructor(nombre, apellido) {
    if ( Persona.contadorPersonas < Persona.MAX_OBJ ) {
      this._nombre = nombre;
      this._apellido = apellido;
      this.idPersona = ++Persona.contadorPersonas;
    } else {
      console.log("limite de personas alcanzado, ya no es posible agregar mas"); 
    }
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
    return "nombre:" + this._nombre + " apellido:" + this._apellido;
  }

  toString() {
    return "id Persona:" + this.idPersona + " " + this.nombreCompleto();
  }

  //  polimorfismo y metodo estatico recibiendo un objeto de la clase
  static saludar(persona) {
    console.log( "Hola " + persona.toString() );
  }

  //  definicion variable estatica
  static contadorPersonas = 0;
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
    this.idEmpleado = ++Empleado.contadorEmpleados;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }

  nombreCompleto() {
    return super.nombreCompleto() + " " + " departamento:" + this._departamento;
  }

  toString() {
    return "id Persona:" + this.idPersona + " " + "id Empleado:" + this.idEmpleado + " " + this.nombreCompleto();
  }

  static contadorEmpleados = 0;
}

let persona = new Persona("Angel", "Franco");
let empleado = new Empleado("Pedro", "Porro", "UsU");

//  demostracion de que no se creo el objeto em

//  llamada del metodo estatico con polimorfismo
//  Empleado.saludar(empleado);
//  Persona.saludar(persona);

//  llamada de los atributos estaticos
//  console.log( Persona.contadorPersonas );
//  console.log( Empleado.contadorEmpleados );

//  acceder a atributo estatico desde la clase hija obtenemos un undefined
//  y los atributos estaticos si se heredan

//  intento de modificacion
Persona.MAX_OBJ = 100;

//  llamada a la variable estatica
console.log( Persona.MAX_OBJ );
