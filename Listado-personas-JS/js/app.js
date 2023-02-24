const personas = [
  new Persona("Angel Sebastian", "Franco Lopez"),
  new Persona("Diego Isaac", "Franco Lopez")
];

function mostrarPersonas() {
  console.log("mostrar personas...");
  let texto = "";

  //  recorremos el arreglo enviando las personas en etiquetas li
  for(let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }

  //  lo enviamos al HTML en el div especifico
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  //  recuperamos el formulario
  const formulario = document.getElementById("formulario");

  //  recuperamos nombre y apellido
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  
  //  validamos que no esten vacios los campos
  if(nombre.value != "" && apellido.value != "") {
    //  procedemos a enviar la informacion
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  } else console.log("Campos vacios");
}