import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvengersService {

  private serverUrl = 'http://localhost:5000'; // Cambia l'URL con l'indirizzo del tuo server Python

  constructor(private http: HttpClient) { }

  getAvengerLocation(avengerName: string): Observable<any> {
    return this.http.get(`${this.serverUrl}/avenger/${avengerName}`);
  }

  getAllCoordinates(): Observable<any[]> {
    return this.http.get<any[]>(`${this.serverUrl}/all`);
  }
}
