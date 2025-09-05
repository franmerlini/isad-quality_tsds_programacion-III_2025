import { Component } from '@angular/core';
import { ListadoProductos } from './componentes/listado-productos/listado-productos';

@Component({
  selector: 'app-root',
  imports: [ListadoProductos],
  template: ` <app-listado-productos /> `,
})
export class App {}
