//  facilita el uso de las promesas
let promesa = new Promise((resolve) => {
  setTimeout( () => resolve("saludos desde timeout"), 5000);
});

//  async indica que una funcion regresa una promesa
async function miFuncionConPromesa() {
  return "saludos con promesa y async"
}

//  consumiendo la promesa
//  miFuncionConPromesa().then(valor => console.log(valor));

//  async / await: manda a llamar a la promesa y la ejecuta
async function funcionPromesa_await() {
  let miPromesa = new Promise( resolve => {
    resolve("promesa con await");
  });
  
  //  simplica el consumo de promesas, evita usar el .then
  console.log(await miPromesa);
}

//  nota await solo se puede usar con una funcion con async
funcionPromesa_await();