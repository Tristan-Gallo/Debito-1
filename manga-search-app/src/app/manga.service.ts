import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private baseUrl = 'https://api.jikan.moe/v4/manga';

  constructor(private http: HttpClient) { }

  searchManga(query: string): Observable<any> {
    const url = `${this.baseUrl}?q=${query}`;
    return this.http.get(url);
  }

  getMangaById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }
}
