console.log("Aplicacion calculadora");

function sumar() {
  //  recuperar el formulario
  const formulario = document.getElementById("formulario");

  //  asignando los objetos del operando A y B
  let operandoA = formulario["operandoA"];
  let operandoB = formulario["operandoB"];

  //  obteniendo el resultado de los valores y parseando dado que por defecto son strings
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);

  //  evitar errores al no mandar numeros
  if( isNaN(resultado) ) document.getElementById("resultado").innerHTML = ("La operacion no incluye numeros");
  
  //  mandar el resultado al HTML
  else document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

  
}