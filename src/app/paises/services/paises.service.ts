import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private urlBase = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }


  buscarPais(pais: string): Observable<Country[]>{
    const url = `${this.urlBase}/name/${pais}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(capital: string): Observable<Country[]>{
    const url = `${this.urlBase}/capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisPorCodigo(codigo: string): Observable<Country[]>{
    const url = `${this.urlBase}/alpha/${codigo}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisesPorRegion(region: string): Observable<Country[]>{
    const url = `${this.urlBase}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

}
