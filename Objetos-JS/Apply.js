//  appy es similar a call tienen la misma funcion
let persona0 = {
  nombre: "A",
  apellido: "letra",
  nombreCompleto: function (elo, titulo) {
    return elo + " " + this.nombre + " " + this.apellido + " Gran " + titulo;
  }
}

let persona1 = {
  nombre: "B",
  apellido: "LETRA"
}

//  uso de apply
//  usamos un metodo del objeto 0 para llamar propiedades del objeto 1
console.log( persona0.nombreCompleto("Hierro 1", "hierrito") );
let argumentos = ["Oro 1", "orardo"];
console.log( persona0.nombreCompleto.apply(persona1, argumentos) );