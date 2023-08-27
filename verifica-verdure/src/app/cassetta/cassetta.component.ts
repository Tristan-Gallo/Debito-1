import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cassetta',
  templateUrl: './cassetta.component.html',
  styleUrls: ['./cassetta.component.css']
})
export class CassettaComponent {
  @Input() tipoCassetta: string | undefined;
  ortaggi: string[] = ['banane', 'pere', 'patate','mele','ciliege'];
}
