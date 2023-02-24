//  ejemplos con promesas, await, async y setTimeout
async function funcion() {
  let promesa = new Promise(resolver => {
    console.log("inicio");
    setTimeout(() => resolver("promesa con await y timeout", 3000));
    console.log("fin");
  });

  console.log(await promesa);
  console.log("fin de la funcion");
}

funcion();
