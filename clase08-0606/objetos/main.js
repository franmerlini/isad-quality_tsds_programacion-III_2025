const viaje = {
  fechaIda: "2025-06-06",
  origen: "Buenos Aires",
  pasajeros: 100,
  tieneEscala: true,
  fechaVuelta: "2025-06-10",
};

// console.log(viaje);

// // acceder a las propiedades del objeto
// console.log(viaje.origen);

// console.log(viaje["origen"]);

// // reemplazar el valor de una propiedad
// viaje.origen = "CABA";
// console.log(viaje.origen);

// // borrar una propiedad
// // delete viaje.tieneEscala;
// // console.log(viaje);

// // listar todas las propiedades
// console.log(Object.keys(viaje));

// // listar todos los valores
// console.log(Object.values(viaje));

// // recorrer las propiedades y valores
// console.log(Object.entries(viaje));

// const objetoComplejo = {
//   algo: {
//     clave: "valor",
//     numero: 123,
//     otraCosa: {
//       subClave: "subValor",
//       subNumero: 456,
//     },
//   },
// };

// console.log(objetoComplejo.algo.clave);
// console.log(objetoComplejo.algo.otraCosa.subNumero);

// // esto no tira error
// console.log(objetoComplejo.pepe?.Clave?.toUpperCase());

let { fechaIda, fechaVuelta, origen } = viaje;
console.log(viaje);

fechaIda = "pepe";

console.log(viaje);
