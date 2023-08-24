import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  searchPokemon(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon/${query}`);
  }

  getItemById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}item/${id}`);
  }
}
