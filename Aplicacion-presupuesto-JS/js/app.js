//  arreglos que manejan los gastos y ingresos
const ingresos = [
  new Ingreso("Salario", 18000.00),
  new Ingreso("Trabajos", 10000.00)
];

const gastos = [
  new Gasto("Suscripciones", 1500.00),
  new Gasto("Internet", 500.00)
];

let cargarApp = () => {
  cargarCabecero();
  cargarIngreso();
  cargarGasto();
}

let ingresosTotales = () => {
  let total = 0;
  for(let ingreso of ingresos) {
    total += ingreso.valor;
  }
  return total;
}

let gastosTotales = () => {
  let total = 0;
  for(let gasto of gastos) {
    total += gasto.valor;
  }
  return total;
}

// metodo que actualizara el HTML
let cargarCabecero = () => {
  let presupuesto = ingresosTotales() - gastosTotales();
  let porcentajeGasto = gastosTotales() / ingresosTotales();

  console.log(gastosTotales());
  
  //  reemplazando valores en el HTML
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeGasto);
  document.getElementById("ingresos").innerHTML = formatoMoneda(ingresosTotales());  
  document.getElementById("gastos").innerHTML = formatoMoneda(gastosTotales());
}

const formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {style:"currency", currency:"USD", minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {style:"percent", minimumFractionDigits:2});
}

const cargarGasto = () => {
  let gastoHTML = "";
  for (let gasto of gastos) {
    gastoHTML += crearGastoHTML(gasto); 
  }
  
  document.getElementById("lista-gastos").innerHTML = gastoHTML;
}

const cargarIngreso = () => {
  let ingresoHTML = "";
  for(let ingreso of ingresos) {
    ingresoHTML += crearIngresoHTML(ingreso);
  }

  document.getElementById("lista-ingresos").innerHTML = ingresoHTML;
}

const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngreso();
}

const eliminarGasto = (id) => {
  let indiceEliminar = gastos.findIndex( gasto => gasto.id === id);
  gastos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarGasto();
}

const crearIngresoHTML = (ingreso) => {
  return `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" 
          onclick="eliminarIngreso(${ingreso.id})" ></ion-icon>
        </button>
      </div>
    </div>
  </div>
  `;
}

const crearGastoHTML = (gasto) => {
  return `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${gasto.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">- ${formatoMoneda(gasto.valor)}</div>
      <div class="elemento_porcentaje">${formatoPorcentaje( gasto.valor/gastosTotales() )}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" 
          onclick="eliminarGasto(${gasto.id})" ></ion-icon>
        </button>
      </div>
    </div>
  </div>
  `;
}

let agregarDato = () => {
  let tipo = document.getElementById("tipo");
  let descripcion = document.getElementById("descripcion");
  let valor = document.getElementById("valor");

  if(valor.value !== "" && descripcion.value !== "") {
    //  conversion de valor de tipo string a number
    if( tipo.value === "ingreso") {
      ingresos.push( new Ingreso(descripcion.value, Number(valor.value)) );
      cargarCabecero();
      cargarIngreso();
    } else if( tipo.value === "gasto") {
      gastos.push( new Gasto(descripcion.value, Number(valor.value)) );
      cargarCabecero();
      cargarGasto();
    }
  }
}