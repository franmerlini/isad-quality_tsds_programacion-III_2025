import { Component } from '@angular/core';

import { Formulario } from './componentes/formulario/formulario';
import { Perfil } from './componentes/perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [Perfil, Formulario],
  template: `
  <p>Hola desde el mismo archivo ts</p>

  <app-formulario />
  `,
})
export class App {}
