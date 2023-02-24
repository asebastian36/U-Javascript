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
    return "id monitor:" + this.idMonitor + " tamano:" + this.tamano + " marca: " + this.marca; 
  }
}