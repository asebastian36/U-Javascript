//  en clases no se puede aplicar el hoisting
//  let miCarro = new auto("Ford", "2031");

class auto {
  constructor(marca, modelo) {
    this._marca = marca;
    this._modelo = modelo;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(modelo) {
    this._modelo = modelo;
  }
}

let miAuto = new auto("CUPRA", "2030");

//  uso de set y get
console.log(miAuto.modelo);

miAuto.marca = "Toyota";