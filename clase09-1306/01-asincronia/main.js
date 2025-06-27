// let nombre = "pepe";

// function saludar(nombre) {
//   console.log(`Hola, ${nombre}`);
// }

// function mostrarMensajeExito() {
//   console.log("archivo guardado!");
//   // ...
// }

// // asincrono
// function guardarArchivo() {
//   setTimeout(mostrarMensajeExito, 3000);
// }

// console.log("Inicio del guardado");

// guardarArchivo();

// console.log("Fin del guardado");

// Promesas

// // 1. la promesa da inicion
// const promesa1 = new Promise((resolve, reject) => {
//   const exito = true;

//   // leer un archivo en disco...
//   return setTimeout(() => {
//     if (exito) {
//       resolve("operacion correcta");
//     } else {
//       reject("operacion correcta");
//     }
//   }, 3000);
// });

// const promesa2 = new Promise((resolve, reject) => {
//   const exito = true;

//   // leer un archivo en disco...
//   return setTimeout(() => {
//     if (exito) {
//       resolve("operacion correcta");
//     } else {
//       reject("operacion correcta");
//     }
//   }, 3000);
// });

// function mostrarMensajeExito() {
//   console.log("Exito");
// }

// promesa1.then(() => {
//   console.log("promesa1 finalizada");
//   return promesa2.then(() => {
//     console.log("promesa2 finalizada");
//   });
// });

function obtenerDatosUsuario() {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve({ id: 1, name: "pepe" });
    }, 3000);
  });
}

function saludar2(nombre) {
  console.log("hola " + nombre);
}

async function main() {
  try {
    const user = obtenerDatosUsuario(); // obtener datos de la base de datos
    console.log(user);
    saludar2(user.name.toUpperCase());
  } catch (error) {
    console.log("error. intentando nuevamente...");
    const user = await obtenerDatosUsuario();
    saludar2(user.name.toUpperCase());
  }
}

main();
