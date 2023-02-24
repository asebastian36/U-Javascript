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
    return "id raton:" + this.idRaton + "tipo de entrada: " + this.tipoEntrada + " marca: " + this.marca;
  }
}