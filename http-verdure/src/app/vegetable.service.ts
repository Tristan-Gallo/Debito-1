import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vegetable } from './vegetables.model';

@Injectable({
  providedIn: 'root'
})
export class VegetableService {
  private apiUrl = 'https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure';

  constructor(private http: HttpClient) {}

  getVegetables(): Observable<Vegetable[]> {
    return this.http.get<Vegetable[]>(this.apiUrl);
  }
}
