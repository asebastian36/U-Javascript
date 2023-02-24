const mostrarReloj = () => {
  let fecha = new Date();
  let hora = formato(fecha.getHours());
  let minutos = formato(fecha.getMinutes());
  let segundos = formato(fecha.getSeconds());

  document.getElementById("hora").innerHTML = hora + ":" + minutos + ":" + segundos;

  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

  let diaSemana = dias[fecha.getDay()];
  let dia = formato(fecha.getDate());
  let mes = meses[fecha.getMonth()];
  let anio = fecha.getFullYear();

  let fechaSalida = diaSemana + ", " + dia + " de " + mes + " de " + anio;
  document.getElementById("fecha").innerHTML = fechaSalida;

}

//  dar formato
const formato = (elemento) => {
  if(elemento < 10) elemento = "0" + elemento;
  return elemento;
}
//  llamada al metodo cada segundo
setInterval(mostrarReloj, 1000);