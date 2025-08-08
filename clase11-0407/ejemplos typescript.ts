let person: { name: string; age: number } = {
  name: "Pepe",
  age: 18,
};

enum Colors {
  Red = "#ff0000",
  Green = "#00ff00",
}

let color = Colors.Green;

function add(x: number, y: number): number {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  return x + y;
}

let nombre = "Pepe";

type Person = {
  name: string;
  age: number;
};

let pepe: Person;

class Animal {
  // atributos
  nombre: string;
  peso: number;

  // metodo constructor
  constructor(nombre: string, peso: number) {
    this.nombre = nombre;
    this.peso = peso;
  }

  // metodos
  correr(): void {}

  alimentarse(): string {
    return `${this.nombre} se alimenta`;
  }
}
