import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-item-pokemon',
  templateUrl: './item-pokemon.component.html',
  styleUrls: ['./item-pokemon.component.css']
})
export class ItemPokemonComponent implements OnInit {
  pokemonId: number | undefined;
  pokemonDetails: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inietta Router
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemonId = +params['id'];
      this.pokemonService.getPokemonDetailsById(this.pokemonId).subscribe(data => {
        this.pokemonDetails = data;
      });
    });
  }

  goBack() {
    this.router.navigate(['/search']); // Torna alla pagina di ricerca
  }
}
