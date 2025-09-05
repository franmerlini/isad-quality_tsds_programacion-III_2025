import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <!-- aca va el contenido cargado dinamicamente en funcion de la ruta -->
    <router-outlet />
  `
})
export class App {
  
}
