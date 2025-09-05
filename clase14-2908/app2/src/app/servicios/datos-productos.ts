import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DatosProductos {
  private productos = [
    { titulo: 'Remera', precio: 15000, hayStock: true },
    { titulo: 'Pantalon', precio: 25000, hayStock: false },
    { titulo: 'Zapatillas', precio: 35000, hayStock: true },
  ]

  obtenerProductos() {
    return this.productos;
  }

  agregarProducto(producto: { titulo: string; precio: number; hayStock: boolean }) {
    this.productos.push(producto);
  } 
}