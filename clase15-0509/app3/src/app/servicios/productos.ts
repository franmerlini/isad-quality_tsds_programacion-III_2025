import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Productos {
  productos = [
    { nombre: 'Taladro', cantidad: 10 },
    { nombre: 'Aspiradora', cantidad: 5 },
  ];

  obtenerProductos() {
    return this.productos;
  }
}
