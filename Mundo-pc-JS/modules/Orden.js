class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this.computadoras = [];
    this._idOrden = ++Orden.contadorOrdenes;
  }

  agregarComputadoras(computadora) {
    this.computadoras.push(computadora);
  }

  get idOrden() {
    return this._idOrden;
  }

  mostrarOrden() {
    let orden = "Orden:" + this.idOrden + " Computadoras: \n";
    this.computadoras.forEach( pc => { orden += pc.toString() + "\n" } );
    return orden;
  } 
}