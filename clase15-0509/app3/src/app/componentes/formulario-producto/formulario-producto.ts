import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-producto',
  imports: [ReactiveFormsModule],
  template: `
    <h1>Formulario</h1>

    <form [formGroup]="formulario">
      <!-- Formulario producto -->
      <fieldset>
         <legend>Datos producto</legend>

        <form formGroupName="datosProducto">
        <div>
          <label for="nombre">Nombre</label>
          <input id="nombre" type="text" formControlName="nombre" />
        </div>

        <div>
          <label for="cantidad">Cantidad</label>
          <input id="cantidad" type="number" formControlName="cantidad" />
        </div>
      </form>
      </fieldset>

      <!-- Formulario cliente -->
      <fieldset>
        <legend>Datos cliente</legend>

        <form>
        <div>
          <label for="nombreCliente">Nombre Cliente</label>
          <input id="nombreCliente" type="text" [formControl]="nombreCliente" />
        </div>

        <div>
          <label for="emailCliente">Email Cliente</label>
          <input id="emailCliente" type="email" [formControl]="emailCliente" />
        </div>
      </form>
      </fieldset>

      <div>
        <button type="button" (click)="enviarFormulario()">Enviar</button>
      </div>
    </form>
  `,
})
export class FormularioProducto {
  // // datos producto
  // nombreProducto = new FormControl('Taladro')
  // cantidadProducto = new FormControl(10)

  // // datos cliente
  // nombreCliente = new FormControl('Pepe')
  // emailCliente = new FormControl('pepe@mail.com')

  // datosProducto = new FormGroup({
  //   nombre: new FormControl('Taladro'),
  //   cantidad: new FormControl(10),
  // });

  // datosCliente = new FormGroup({
  //   nombre: new FormControl('Pepe'),
  //   email: new FormControl('pepe@mail.com'),
  // });

  readonly formulario = new FormGroup({
    datosProducto: new FormGroup({
      nombre: new FormControl('' , [Validators.required, Validators.minLength(3)]),
      cantidad: new FormControl(null, [Validators.required, Validators.min(1)]),
    }),
    datosCliente: new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    }),
    aceptaTerminos: new FormControl(false),
  });

  get nombreCliente(): FormControl {
    return this.formulario.get('datosCliente')?.get('nombre') as FormControl;
  }

  get emailCliente(): FormControl {
    return this.formulario.get('datosCliente')?.get('email') as FormControl;
  }

  enviarFormulario() {
    console.log(this.formulario)
    if (this.formulario.invalid) {
      alert('Formulario invalido');
      return;
    }
    console.log('Valor form: ' + this.formulario.value);
    console.log('Es valido: ' + this.formulario.valid)
  }
}
