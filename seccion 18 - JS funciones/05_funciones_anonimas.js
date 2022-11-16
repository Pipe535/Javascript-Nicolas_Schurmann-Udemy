
// Funciones anonimas
// Funcion que no tiene ningun nombre
// Se utiliza en general si va a ser ejecutada dentro de otra funcion como en callbacks

function suma(numero01, numero02, cb) {
    const resultado = numero01 + numero02;
    cb(resultado);
}

function callback(resultado) {
    console.log('Resultado: ',resultado)
}


suma(2, 3, function (r) {
    console.log('Funcion anonima, resultado: ', r)
})



