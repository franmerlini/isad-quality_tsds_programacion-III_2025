import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <a routerLink="/about-us">Acerca de</a>
  `
})
export class Home {

}
