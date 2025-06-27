const numeros = [1, 2, 3, 4, 20, 30, 40];
// //               0    1       2     3      4        5
// //              -6   -5      -4    -3     -2       -1
// console.log(numeros);

// console.log(numeros[1]);

// // acceder al primer elemento
// console.log(numeros[0]);
// console.log(numeros.at(0));

// // longitud del arreglo
// console.log(numeros.length);

// // acceder al ultimo elemento
// console.log(numeros[numeros.length - 1]);
// console.log(numeros.at(-1));

// recorrer el arreglo

// 1. utilizando un for
// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// // 2. utilizando metodo forEach
// function mostrarValorDeElemento(elem, i) {
//   console.log("indice: ", i, "valor del elemento: ", elem);
// }

// const mostrar = (elem, i) => {
//   console.log("indice: ", i, "valor del elemento: ", elem);
// };

// numeros.forEach((elem, i) => {
//   console.log("indice: ", i, "valor del elemento: ", elem);
// });

// // agregar elementos
// numeros.push(20); // al final
// console.log(numeros);

// numeros.unshift(30);
// console.log(numeros);

// numeros.pop();
// numeros.pop();
// console.log(numeros);

// // buscar elementos
// const resultado1 = numeros.find(function (value, index) {
//   return value > 10;
// });

// const resultado2 = numeros.findIndex((value) => value > 10);

// console.log(resultado1);
// console.log(resultado2);

// const funcionComparadora = (value) => typeof value === "number";

// console.log(numeros.every(funcionComparadora));

// function funcionOrdenadora(value1, value2) {
//   return value2 - value1;
// }

// const letras = ["f", "a", "g", "z"];
// console.log(letras.sort());

const nombres = ["pepe", "toto", "maria"];

// const nombresConMayusc = nombres.map(
//   (val) => val[0].toUpperCase() + val.slice(1)
// );

// console.log(nombres);
// console.log(nombresConMayusc);

// console.log(nombres.slice(1));
// console.log(nombres);

console.log(nombres);
console.log(nombres.splice(1));
console.log(nombres);
