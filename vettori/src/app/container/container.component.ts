import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent { macchineDaCantiere: string[] = [
  "Escavatore",
  "Bettoniera",
  "Gru",
  "Rullo compressore",
  "Bulldozer",
  "Caricatore frontale",
  "Livellatrice",
  "Martello demolitore",
  "Carrello elevatore",
  "Escavatore demolitore"
];

}
