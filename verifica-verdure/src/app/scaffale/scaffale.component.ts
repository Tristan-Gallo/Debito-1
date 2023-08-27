import { Component } from '@angular/core';

@Component({
  selector: 'app-scaffale',
  templateUrl: './scaffale.component.html',
  styleUrls: ['./scaffale.component.css']
})
export class ScaffaleComponent {
  cassette: string[] = ['frutta mista', 'ortaggi di stagione', 'frutta coi pesticidi', 'cassetta di agrumi', 'verdure biologiche'];
}
