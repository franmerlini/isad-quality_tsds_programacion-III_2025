import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nombre = 'Pepe';
  correo = ''
  esValido = true;

  paises = [
    { id: 1, nombre: 'Argentina', value: 'AR' },
    { id: 2, nombre: 'Chile', value: 'CL' },
    { id: 3, nombre: 'Colombia', value: 'CO' },
    { id: 4, nombre: 'España', value: 'ES' },
    { id: 5, nombre: 'México', value: 'MX' },
  ];

  enviarFormulario() {
    alert('Formulario enviado');
  }

  actualizarValor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.correo = input.value;
  }
}
