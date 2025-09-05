import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  template: `
    <h2>Acerca de nosotros</h2>
    <a routerLink="/">Volver al inicio</a>
    <hr>
    <a routerLink="/formulario-producto">Ir al formulario de producto</a>
  `
})
export class AboutUs {
  router = inject(Router)

  constructor() {
    setTimeout(() => {
      this.router.navigate(['/formulario-producto'])
    }, 5000)
  }
}
