class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
    this._idProducto = ++Producto.contadorProductos;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `id producto:${this.idProducto} nombre:${this.nombre} precio \$${this.precio}`; 
  }
}

class Orden {
  static contadorOrdenes = 0;
  
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    this._contadorProductos = 0;
  }
  
  static get MAX_PRODUCTOS() {
    return 5;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if(this._contadorProductos < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
      ++this._contadorProductos;
    } else {
      console.log("limite de productos excedido, empieza otra orden");
    }
  }

  calcularTotal() {
    if(this._productos.length === 0) console.log("no ha agregado productos a la orden, no se puede haber un total");
    //  suma de productos en for
    let total = 0;
    for(let producto of this._productos) total += producto.precio;
    return total;
  }

  mostrarOrden() {
    if(this._productos.length == 0) console.log("no hay productos en la orden aun");
    let orden = "";
    for(let producto of this._productos) orden += producto.toString() + "\n";
    orden += "suma total de articulos $" + this.calcularTotal();
    return orden;
  }
}

//  test
let producto = new Producto("audifonos sounpeats", 999);
let producto1 = new Producto("redmi smartband pro", 800);

let orden = new Orden();

orden.agregarProducto( producto );
orden.agregarProducto( producto1 );
orden.agregarProducto( producto );
orden.agregarProducto( producto1 );
orden.agregarProducto( producto );
//  orden.agregarProducto( producto );

console.log( orden.mostrarOrden() );