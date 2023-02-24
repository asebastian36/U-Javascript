//  una clase tiene atributos y metodos
//  es un molde para crear objetos

class Clase {
  constructor(horario, materia) {
    //  con el this creamos el atributo
    this.horario = horario;
    this.materia = materia;
  }
}

let clase1 = new Clase("07:00", "Manejo de archivos");
console.log(clase1);

let clase2 = new Clase("10:00", "no me acuerdo");
console.log(clase2)