// funcion 
// function sumar(num1, num2 = 10, num3) {
//   imprimirValorPorConsola('Numero 1:' + num1)
//   imprimirValorPorConsola('Numero 2:' + num2)
//   imprimirValorPorConsola('La suma es:' + (num1 + num2))
//   return num1 + num2
// }

// funciones anonimas
let miFuncion = function () {

}

// sumar(3, 6)
// sumar(7)

function imprimirValorPorConsola(valor) {
  console.log(valor)
}

let resultado = sumar(4, 3)

console.log('El resultado es:', resultado)

// funcion flecha
let sumarFlecha = (num1, num2) => num1 + num2

let sumarFlecha2 = (num1, num2) => {
  // ...mas cosas
  return num1 + num2
}

function sumar(num1, num2) {
  return num1 + num2
}