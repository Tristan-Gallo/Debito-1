import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedAvenger: any;
  showAccessIcon = false; // Aggiunta della variabile per mostrare/nascondere l'icona

  constructor(private http: HttpClient) {}

  getAvenger(avengerName: string) {
    this.http.get<any>(`http://localhost:5000/${avengerName}`).subscribe(
      data => {
        this.selectedAvenger = data;
      },
      error => {
        console.error('Errore durante il recupero dell\'Avenger:', error);
      }
    );
  }

  showSecretAccess() {
    this.showAccessIcon = true;
  }
}
