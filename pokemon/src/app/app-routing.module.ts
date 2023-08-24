import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';

const routes: Routes = [
  { path: '', redirectTo: '/search-pokemon', pathMatch: 'full' },
  { path: 'search-pokemon', component: SearchPokemonComponent },
  { path: 'item-pokemon/:id', component: ItemPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
