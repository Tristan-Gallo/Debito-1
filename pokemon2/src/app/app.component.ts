// app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PokemonLair {
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mapLat = 35.6895;
  mapLng = 139.6917;
  mapZoom = 12;
  foundPokemon: PokemonLair | undefined;

  constructor(private http: HttpClient) {}

  findPokemon(pokemon: string) {
    this.http.get<PokemonLair>(`http://localhost:5000/${pokemon}`).subscribe(
      (response) => {
        this.foundPokemon = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
