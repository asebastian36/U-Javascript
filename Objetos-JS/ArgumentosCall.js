let persona0 = {
  nombre: "A",
  apellido: "letra",
  //  aqui se ponen los parametros
  nombreCompleto: function (titulo, telefono) {
    return titulo + " " + this.nombre + " " + this.apellido + " tel:" + telefono;
  }
}

let persona1 = {
  nombre: "B",
  apellido: "LETRA"
}

//  paso de argumentos call
console.log( persona0.nombreCompleto("Hokage", "0000000000") );
console.log( persona0.nombreCompleto.call(persona1, "Maestro", "1111111111") );
