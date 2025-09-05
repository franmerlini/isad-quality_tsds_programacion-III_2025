import { Component, inject } from '@angular/core';

import { Card } from '../card/card';

import { DatosProductos } from '../../servicios/datos-productos';
import { DatosUsuarios } from '../../servicios/datos-usuarios';

@Component({
  selector: 'app-listado-productos',
  imports: [Card],
  template: `
    <h1>Lista de productos</h1>

    @for (producto of productos; track producto.titulo) {
      <app-card 
        [titulo]="producto.titulo" 
        [precio]="producto.precio"
        [tienePermiso]="producto.hayStock" 
        (comprarProducto)="manejarLogicaCompraProducto($event)" 
      />
    } @empty {
      <p>No se ha encontrado ningun componente</p>
    }


    @for (usuario of usuarios; track usuario.id) {
      <p>
        <span>{{usuario.id}} - {{usuario.username}}</span>
      </p>
    }
  `,
})
export class ListadoProductos {
  titulo = 'Remera';
  precioPadre = 15000;
  productos: undefined | any[];
  usuarios: undefined | any[];


  datosProductos = inject(DatosProductos);
  datosUsuarios = inject(DatosUsuarios)

  constructor() {
    this.productos = this.datosProductos.obtenerProductos() // <---
    this.datosUsuarios.obtenerUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios
    })
  }

  manejarLogicaCompraProducto(producto: { titulo: string; precio: number }) {
    alert(`Se ha realizado la compra de ${producto.titulo}. Costo $${producto.precio}`)
  }
}
