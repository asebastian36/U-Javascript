class Orden {
  static contadorOrdenes = 0;
  productos = [];
  contadorProductos = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    this.productos.push(producto);
    ++this.contadorProductos;
  }

  calcularTotal() {
    if(this.productos.length === 0) console.log("no a agregado productos a la orden, no se puede haber un total");
    //  suma de productos en for
    
  }

  toString() {
    //  pendiente el toString
  }
}