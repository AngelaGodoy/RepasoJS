/* ARRAY, CICLO FOR, WHILE, DO WHILE, SWITCH*/
//https://youtu.be/Zwcqq-7IDI0?t=2131
var arreglo = [1, 2, 3, 'hola', false];

console.log(arreglo);
console.log(arreglo[2]);

for (var i = 0; i <= 4; i++) {
    console.log(arreglo[i]);
}

i = 0;
while (i <= 4) {
    console.log(arreglo[i]);
    i++;
}

i = 0;
do {
    console.log(arreglo[i]);
    i++;
} while (i <= 4);

var opcion = 3;
switch (opcion) {
    case 1:
        console.log('hola');
    break;
    case 2:
        console.log('hello');
    break;
    case 3:
        console.log('bona tarde');
    break;
    default:
        console.log('no hay saludo');
    break;
}