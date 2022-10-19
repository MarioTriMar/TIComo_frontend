import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurante } from './restaurante';
@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private baseURL ="http://localhost:8080/ticomo/restaurantes"
  constructor(private httpClient: HttpClient) { }



  getRestaurantes():Observable<Restaurante[]>{
    return this.httpClient.get<Restaurante[]>(`${this.baseURL}`);
  }

  saveRestaurante(restaurante:Restaurante):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, restaurante);
  }

  getRestauranteById(cif:String){
    return this.httpClient.get<Restaurante>(this.baseURL+"/"+cif);
  }

  updateRestaurante(restaurante:Restaurante){
    return this.httpClient.put<Restaurante>(this.baseURL, restaurante)
  }

  deleteRestauranteById(cif:String){
    return this.httpClient.delete<Restaurante>(this.baseURL+"/"+cif);
  }

}