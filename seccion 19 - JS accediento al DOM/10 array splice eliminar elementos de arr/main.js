
// Eliminar elementos del arreglo
const arr = [1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

console.log('Eliminados');

// Eliminar desde donde y cuantos eliminar
// .splice(desde donde empieza, cuantos eliminar)
arr.splice(5,3);
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}
