class Persona{
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorPersonas; 
  }

  get idPersona() {
    return this._idPersona;
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

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  toString() {
    return `id Persona:${this.idPersona} 
            nombre: ${this.nombre} 
            apellido: ${this.apellido} 
            edad:${this.edad}`;
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleados;
  }

  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }

  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return `id Empleado:${this.idEmpleado}
            ${super.toString()}
            sueldo:${this.sueldo}`;
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;
  
  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._fechaRegistro = fechaRegistro;
    this._idCliente = ++Cliente.contadorClientes;
  }

  get idCliente() {
    return this._idCliente;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return `id Cliente:${this.idCliente} 
            ${super.toString()} 
            fecha de registro: 
            ${this.fechaRegistro}`;
  }
}

//  sintaxis para crear datos de tipo date:
//  obtiene la fecha y hora actual
//  new Date();

//  pruebas
let persona = new Persona("Angel Sebastian", "Franco Lopez", 21);
console.log( persona.toString() );

let empleado = new Empleado("Jose", "Lopez", 28, 3000);
console.log( empleado.toString() );

let fecha = new Date();
let cliente = new Cliente("Lucio Ivan", "Zacarias Lopez", 28, fecha);
console.log( cliente.toString() );