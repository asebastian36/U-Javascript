//  cuando no pasemos objetos a una funcion

//  tipo primitivo
let x = 10;

function cambiarValor(a) {
  a = 20;
}

//  ejemplo de paso por valor, cuando damos una copia del valor
cambiarValor(x);
//  x no sufrio cambio
console.log(x);