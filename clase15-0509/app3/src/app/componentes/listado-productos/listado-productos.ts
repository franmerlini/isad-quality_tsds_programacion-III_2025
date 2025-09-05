import { Component, inject } from '@angular/core';

import { Productos } from '../../servicios/productos';

@Component({
  selector: 'app-listado-productos',
  imports: [],
  template: `
    <ul>
      @for (producto of productos; track producto.nombre) {
        <li>{{ producto.nombre }} ({{ producto.cantidad }})</li>
      }
    </ul>
  `
})
export class ListadoProductos {
  productosSvc = inject(Productos)

  productos = this.productosSvc.obtenerProductos();
}
