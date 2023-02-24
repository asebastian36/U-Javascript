//  setInterval manda a llamar varias veces la funcion cada cierto tiempo
let reloj = () => {
  let fecha = new Date();
  console.log(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

setInterval(reloj, 30000);// cada minuto manda la hora