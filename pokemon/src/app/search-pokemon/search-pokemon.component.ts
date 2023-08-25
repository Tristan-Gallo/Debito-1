import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {
  searchTerm = '';
  searchResult: any;

  constructor(private pokemonService: PokemonService) { }

  searchPokemon() {
    this.pokemonService.searchPokemon(this.searchTerm).subscribe(data => {
      this.searchResult = data;
    });
  }
}
