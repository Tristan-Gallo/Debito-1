import { Component, OnInit } from '@angular/core';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-search-manga',
  templateUrl: './search-manga.component.html',
  styleUrls: ['./search-manga.component.css']
})
export class SearchMangaComponent implements OnInit {
  searchQuery: string = ''; // Proprietà per la query di ricerca
  searchResults: any[] = []; // Array per i risultati della ricerca

  constructor(private mangaService: MangaService) {}

  ngOnInit(): void {}

  search(): void {
    if (this.searchQuery.trim() !== '') {
      this.mangaService.searchManga(this.searchQuery).subscribe(
        (results: any) => {
          this.searchResults = results.results; // Salva i risultati nella proprietà searchResults
        },
        (error) => {
          console.error('Error searching manga:', error);
        }
      );
    }
  }
}
