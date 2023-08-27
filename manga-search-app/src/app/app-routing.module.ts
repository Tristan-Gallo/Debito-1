import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMangaComponent } from './search-manga/search-manga.component';
import { ItemMangaComponent } from './item-manga/item-manga.component';


const routes: Routes = [  { path: '', redirectTo: '/search', pathMatch: 'full' },
{ path: 'search', component: SearchMangaComponent },
{ path: 'item/:id', component: ItemMangaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
