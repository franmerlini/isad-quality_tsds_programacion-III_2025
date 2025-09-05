import { Routes } from '@angular/router';

import { AboutUs } from './componentes/about-us/about-us';
import { FormularioProducto } from './componentes/formulario-producto/formulario-producto';
import { Home } from './componentes/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about-us',
    component: AboutUs,
  },
  {
    path: 'formulario-producto',
    component: FormularioProducto,
  },
];
