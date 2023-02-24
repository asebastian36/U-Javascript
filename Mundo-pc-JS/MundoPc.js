class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca; 
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return "id raton:" + this.idRaton + ", tipo de entrada: " +  this.tipoEntrada + ", marca: " + this.marca;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return "id teclado:" + this.idTeclado + ", tipo de entrada: " + this.tipoEntrada + ", marca: " + this.marca;
  }
}

class Monitor {
  static contadorMonitores = 0;
  
  constructor(tamano, marca) {
    this._marca = marca;
    this._tamano = tamano;
    this._idMonitor = ++Monitor.contadorMonitores;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get tamano() {
    return this._tamano;
  }

  set tamano(tamano) {
    this._tamano = tamano;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  toString() {
    return "id monitor:" + this.idMonitor + ", tamano:" + this.tamano + ", marca: " + this.marca; 
  }
}

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
    this._idComputadora = ++Computadora.contadorComputadoras; 
  }

  get monitor() {
    return this._monitor;
  }

  set monitor(monitor) {
    this._monitor = monitor;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get teclado() {
    return this._teclado;
  }

  set teclado(teclado) {
    this._teclado = teclado;
  }

  get raton() {
    return this._raton;
  }

  set raton(raton) {
    this._raton = raton;
  }

  get idComputadora() {
    return this._idComputadora;
  }

  toString() {
    let toString = "";
    toString +=  "Monitor: [" + this.monitor.toString() + "]\n";
    toString += "Raton: [" + this.raton.toString() + "] \n";
    toString += "Teclado: [" + this.teclado.toString() + "] \n";
    return toString;
  }
}

class Orden {
  static contadorOrdenes = 0;

  constructor() {
    this.computadoras = [];
    this._idOrden = ++Orden.contadorOrdenes;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadoras(computadora) {
    this.computadoras.push(computadora);
  }

  mostrarOrden() {
    let orden = "Orden:" + this.idOrden + " Computadoras: \n";
    this.computadoras.forEach( pc => { orden += pc.toString() + "\n"} );
    return orden;
  }
}

//  test
let monitor = new Monitor(27, "LG");
let raton = new Raton("USB", "Logitech");
let teclado = new Teclado("USB", "Corsair");

let miPc = new Computadora("mi setup", monitor, teclado, raton);

let orden = new Orden();

orden.agregarComputadoras(miPc);

console.log( orden.mostrarOrden() );