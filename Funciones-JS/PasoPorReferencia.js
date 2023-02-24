//  creacion del objeto con atributos
const persona = {
  nombre: "Angel",
  apellido: "Franco",
  edad: 21
}

//  ejemplo de paso por referencia

//  acceso a los atributos desde la funcion
function cambiarValorObjeto(objeto, edad, apellido, nombre) {
  objeto.edad = edad;
  objeto.apellido = apellido;
  objeto.nombre = nombre;
}

cambiarValorObjeto(persona, 22, "Franco Lopez", "Angel Sebastian");
console.log(persona);

