let objeto = {
  propiedad1: "soy una propiedad",
  propiedad2: 2,
  propiedad3: "fin"
}

//  1.
//  console.log(objeto);
//  incoveniente en un navegador podria mandar [object Object]

//  2. si funciona en navegador
//  concatenar
//  console.log(objeto.propiedad1 + ", " + objeto.propiedad2 + " y " + objeto.propiedad3);

//  3. for in
for (const key in objeto) {
  console.log(key);
  console.log(objeto[key]);
}

//  4. obtener los valores de las propiedades y guardarlos en un arreglo
let objetoArray = Object.values(objeto);
console.log(objetoArray)

//  5. obtienes el objeto en cadena
let objetoString = JSON.stringify(objeto);
console.log(objetoString);