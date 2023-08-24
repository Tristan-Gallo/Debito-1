// driving.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mezzo } from './driving.model' ;


@Injectable({
  providedIn: 'root'
})
export class DrivingService {
  private apiUrl = 'https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi';

  constructor(private http: HttpClient) {}

  getMezzi(): Observable<Mezzo[]> {
    return this.http.get<Mezzo[]>(this.apiUrl);
  }
}
