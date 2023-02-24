//  uso de parametros y argumentos

//  uso de parametros dinamicos
let resultado = sumarTodo(5, 4, 13, 10, 9);

function sumarTodo() {
  let suma = 0;
  //  los valores se guardan en el arreglo arguments
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i];
  }

  return suma;
}

console.log(resultado);