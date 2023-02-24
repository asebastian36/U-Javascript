let objeto = new Object();

objeto.atributo = "soy un atributo";

//  mostrar atributo
objeto.getAtributo = function() {
  return this.atributo;
}

//  llamada a la funcion
objeto.getAtributo;


//  ejemplo con otro tipo de objeto
let obj = {
  propiedad: "soy la primera propiedad",
  propiedad2: "soy la segunda propiedad",
  idioma: "ES",
  get getPropiedad() {
    return this.propiedad;
  },
  set setPropiedad(propiedad) {
    this.propiedad = propiedad;
  }
}

//  metodos get y set
obj.setPropiedad = "sigo siendo la primer propiedad";
console.log(obj.getPropiedad);