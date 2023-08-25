import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-item-pokemon',
  templateUrl: './item-pokemon.component.html',
  styleUrls: ['./item-pokemon.component.css']
})
export class ItemPokemonComponent implements OnInit {
  pokemonId: number | undefined;
  pokemonDetails: any;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemonId = +params['id']; // Converto l'id in un numero
      this.pokemonService.getPokemonDetailsById(this.pokemonId).subscribe(data => {
        this.pokemonDetails = data;
      });
    });
  }
}
