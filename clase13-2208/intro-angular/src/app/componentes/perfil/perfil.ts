import { Component } from '@angular/core';

@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html',
  styleUrl: 'perfil.css',
})
export class Perfil {
  nombre = 'Francisco';

  constructor() {
    setTimeout(() => {
      this.nombre = 'Pepe'
    }, 4000)
  }

  obtenerNombre() {
    return 'Pepe'
  }
}