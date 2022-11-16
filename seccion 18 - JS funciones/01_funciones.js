
// Funciones en javascript

// Crear una funcion para mostrar arreglos
function iterar(arreglo) {
    for (let parametro = 0; parametro < arreglo.length; parametro++) {
        console.log(arreglo[parametro]);
    }
}

// Primer llamado a funcion para mostrar arreglo
arreglo01 = [1,6,3,2,5,6,2]
iterar(arreglo01);

console.log('-----');

// Segundo llamado a funcion para mostrar arreglo
arreglo02 = ['Juan','Pipe','Mguel']
iterar(arreglo02);