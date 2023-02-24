//  tipo object que permite almacenar varios valores

//  declarar un arreglo manera clasica
//  let autos = new Array('Volvo', 'Mercedes Benz');

//  declaracion mas actual si se saben los valores a guardar
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
// console.log(autos);

//  acceder a elementos de un arreglo
//  console.log(autos[0]);
//  console.log(autos[1]);

//  recorrer elementos
//  metodo 1.
for (let index = 0; index < autos.length; index++) {
    const element = autos[index];
    // console.log(element);
}

//  metodo 2.
autos.forEach(auto => { 
    //  console.log(auto);
});

//  metodo 3.
for (const iterator of autos) {
   //   console.log(iterator); 
}

//  modificar elementos de un arreglo
autos[0] = "Ford";
autos[1] = "Chevrolet";
autos[2] = "CUPRA";

//  agregar elemento al final del arreglo
autos.push("Audi");
autos.push("Cadillac");

//  ahora con indice
autos[5] = "KIA";

//  para saber la longitud de nuestro arreglo
console.log(autos.length);

//  como identificar un arreglo
//  no funciona type of porque es un objeto

//  se usa esto, retorna un boolean
console.log(Array.isArray(autos));

//  opcion b:
console.log(autos instanceof Array);