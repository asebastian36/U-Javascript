//  diferencias entre tipos primitivos y objetos
//  los objetos pueden contener propiedades y metodos
//  los tipos primitivos no.

let x = 10;

//  forma comun de crear objetos
let persona = {
  nombre: "Angel Sebastian",
  apellido: "Franco Lopez",
  email: "afranco@email.com",
  edad: 21,

  //  agregar un metodo a los objetos
  nombreCompleto: function() {
    //  console.log(this.nombre + " " + this.apellido);
  }

}

//  llamada a la funcion del objeto
persona.nombreCompleto();

//  creacion de objetos opcion 2:
let otraPersona = new Object();
otraPersona.nombre = "Diego Isaac";
otraPersona.telefono = "2244556677";
otraPersona.direccion = "fifalandia";

//  console.log(otraPersona);

//  acceder a propiedades de los objetos
//  console.log(otraPersona["nombre"]);

//  recorrer propiedades del objeto
//  for in
for (propiedad in otraPersona) {
  //  console.log(propiedad);
  //  console.log(otraPersona[propiedad]);  
}

//  agregar nuevas propiedad
otraPersona.color = "carton";

//  eliminar propiedad
delete otraPersona.color;

