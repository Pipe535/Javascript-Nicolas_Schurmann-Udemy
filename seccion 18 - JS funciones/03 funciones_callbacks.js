

// Funciones callbacks

// El parametro cb para llamar a la funcion callback
function suma(numero01, numero02, cb) {
    const resultado = numero01 + numero02;
    cb(resultado); // En este punto se llama a la funcion callback
}

function callback(resultado) {
    console.log('Resultado: ',resultado)
}

suma(2,5,callback); // Obtener resultado de funcion suma

// 1. Se llama a funciuon suma con parametros
// 2. Dentro de la funcion se obtiene el resultado de la suma de los dos primeros parametros
// 3. cb(resultado) -> Llamar a la funcion que se le pasa como tercer parameto, y la ejecuta, 
//    con el valor de la suma
