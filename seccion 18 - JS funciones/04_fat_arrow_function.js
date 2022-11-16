
// fat arrow function
// No se utiliza la palabra function para declarar la funcion
// Si la funcion tiene una sola linea, no es necesario colocar el valor de return

// PRIMERA FORMA
//  nombre funcion = (parametros) => Que se quiere retornar
const miFatArrowFunction = (a, b) => a + b
console.log(miFatArrowFunction(5,3));

// SEGUNDA FORMA
const miFatArrowFunction02 = (a, b) => {
    return a + b
}
console.log(miFatArrowFunction02(9,3));