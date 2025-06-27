// ciclo for
// inicializacion, condicion de corte, incremento de la variable
// for (let i = 0; i < 10 ; i = i + 1) { // bloque del ciclo
//   console.log(i)
// }

for (let i = 0; i < 10 ; i++) { // bloque del ciclo
  console.log(i)

  if (i === 2) {
    continue // terminar la iteracion actual (pasa a la siguiente)
  }

  if (i === 4) {
    break // terminar el ciclo abruptamente
  }
  console.log('hola')
}

// ciclo while

// let j = 10 //inicializacion
// //     condicion de corte
// while (j < 10) {
//   console.log(j)
//   // j = j + 1
//   j++
// }

// ciclo do..while

// let k = 10

// do {
//   console.log(k)
//   k++
// }
// while (k < 10)