// sentencia if
let edad = 5;

if (edad >= 18) { // bloque de rama verdadera
  console.log('Es adulto')
} else if (edad >= 10) { // bloque de rama falsa
  console.log('Es adolescente')
} else {
  console.log('Es niño')
}

edad >= 18 
  ? console.log('Es adulto') 
  : edad >= 10
    ? console.log('Es adolescente')
    : console.log('Es niño')

switch (edad) {
  case edad >= 18: {
    console.log('Es adulto')
  }
  case edad >= 10: {
    console.log('Es adolescente')
  }
  default: {
    console.log('Es niño')
  }
}