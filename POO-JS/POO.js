//  para aplicar la sobreescritura se requiere herencia
class Empleado {
  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  obtenerDetalles() {
    return "Empleado: nombre: " + this.nombre + " sueldo:" + this.sueldo;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }

  //  En este metodo se aplica la sobreescritura
  obtenerDetalles() {
    return "Gerente: " + super.obtenerDetalles() + " departamento: " + this.departamento;
  }
}

//  aplicando polimorfismo
function imprimir(tipo) {
  console.log( tipo.obtenerDetalles() );

  //  uso de instance of funciona con clases del mismo tipo o clases padre:

  //  como recomendacion utiliza la clase de menor jerarquia para preguntar

  //  empleado solo mandara tipo empleado por ser clase padre
  //  gerente solo mandara tipo empleado y gerente por que es gerente y empleado por ser clase padre
  if( tipo instanceof Empleado ) console.log("Es un objeto de tipo Empleado");
  else if( tipo instanceof Gerente ) console.log("Es un objeto de tipo Gerente");
}

let empleado = new Empleado("Marcos", 2800);
let gerente = new Gerente("Horacio", 4500, "Finanzas");