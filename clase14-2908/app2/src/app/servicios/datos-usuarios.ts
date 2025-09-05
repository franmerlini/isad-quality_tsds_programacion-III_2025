import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuarios {
  baseUrl = 'https://jsonplaceholder.typicode.com'

  httpClient = inject(HttpClient)

  obtenerUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/users`)
    // return of([
    //   { id: 1, username: 'Fran' },
    //   { id: 2, username: 'Meli' },])
  }
}
