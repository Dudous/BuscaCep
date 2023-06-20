import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuCepService {

  constructor(private http: HttpClient) {}

  localizaCep(cod: string): Observable<any> {
    const url = `https://viacep.com.br/ws/${cod}/json`;

    const header = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this.http.get(url, header);
  }
}
