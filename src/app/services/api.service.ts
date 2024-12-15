import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.baseUrl; // Cambia esto con la URL final

  constructor(private http: HttpClient) { }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer'
      })
    };
  }

  // Método genérico para hacer POST
  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, this.getHttpOptions());
  }

  // Método genérico para hacer GET
  getData(endpoint: string, params?: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, {
      params: params,
      headers: this.getHttpOptions().headers
    });
  }

  // Otros métodos HTTP (PUT, DELETE, PATCH) si es necesario:
  putData(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data, this.getHttpOptions());
  }

  deleteData(endpoint: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}`, this.getHttpOptions());
  }
}
