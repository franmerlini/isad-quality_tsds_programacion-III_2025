import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <h3>{{titulo}}</h3>
    <span>$ {{precio}} </span>
    <button (click)="realizarCompra()">Comprar</button>
  `
})
export class Card {
  @Input() titulo: undefined | string;
  
  @Input() precio: undefined | number;

  @Input() tienePermiso: undefined | boolean;

  @Output() comprarProducto = new EventEmitter()

  realizarCompra() {
    if (this.tienePermiso) {
      this.comprarProducto.emit({
      titulo: this.titulo,
      precio: this.precio
    })
    }
  }
}
