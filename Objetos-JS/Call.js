let persona0 = {
  nombre: "A",
  apellido: "letra",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  }
}

let persona1 = {
  nombre: "B",
  apellido: "LETRA"
}

//  uso de call
//  usamos un metodo del objeto 0 para llamar propiedades del objeto 1
console.log( persona0.nombreCompleto() );
console.log( persona0.nombreCompleto.call(persona1) );
