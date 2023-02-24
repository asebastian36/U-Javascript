//  constructor
function Objeto(atributo, numero) {
  this.atributo = atributo;
  this.numero = numero;

  //  agregar un metodo a un constructor
  this.mostrarAtributos = function() {
    return this.numero + " " + this.atributo;
  }
}

//  creacion del objeto
let objeto = {
  //  atributos
  atributo: "soy un atributo",
  numero: 1,

  //  getter y setters
  set setAtributo(atributo) {
    this.atributo = atributo;
  },

  get getAtributo() {
    return this.atributo;
  },

  set setNumero(numero) {
    this.numero = numero;
  },

  get getNumero() {
    return this.numero;
  }
}

//  primeras instancias con constructor
let instancia0 = new Objeto("soy el atributo", 2);

//  cambios en la instancia0 no comparte los metodos de objeto
delete instancia0.setAtributo;

console.log(instancia0);

//  uso del metodo creado desde el constructor
let instancia1 = new Objeto("atributo", 3);
console.log(instancia1.mostrarAtributos());
