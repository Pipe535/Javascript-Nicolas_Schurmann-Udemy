
// Control de flujo 'switch'

let key = 6

switch (key) { // Asignar que se quiere validar dentro del switch
    case 1: // Cuando key sea igual a 1
        console.log('Numero 1');
        break;
    case 2: // Cuando key sea igual a 2
        console.log('Numero 2');
        break;
    case 3: // Cuando key sea igual a 3
        console.log('Numero 3');
        break;

    default: // Cuando key no se encuentre en algun case
        console.log('Numero no encontrado');
        break;
}