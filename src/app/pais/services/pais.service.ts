import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  // BUSCAR POR PAIS
  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

  //BUSCAR POR CAPITAL
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  // VER PAIS POR CODIGO
  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
  // BUSCAR REGION
  buscarRegion(region: string): Observable<Country[]> {
    // const params = new HttpParams()
    //   .set('fields', 'name;capital;alpha2code;flag;population');

    const url = `${this.apiUrl}/regionalbloc/${region}`;
    // const url = `${this.apiUrl}/regionalbloc/${region}?fields=name;capital;alpha2code;flag;population`;
    return this.http.get<Country[]>(url);
    // return this.http.get<Country[]>(url,{params:params});
  }

}
