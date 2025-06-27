// 1. crear el arreglo
const lista = ["leche", "pan", "huevos"];

// 2. agregar galletas al arreglo
lista.push("Galletas");
console.log(lista);

// 3. eliminar pan del arreglo
// // lista.pop("pan");
const productosFiltrados = lista.filter((value) => value !== "pan");
console.log(productosFiltrados);
// lista.splice(lista.indexOf("pan"), 1);
// console.log(lista);

// 4. ordenar el arreglo
productosFiltrados.sort();
console.log(productosFiltrados);
