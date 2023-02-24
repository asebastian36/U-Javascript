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