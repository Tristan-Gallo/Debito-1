import { Component } from '@angular/core';
import { AvengersService } from '../avengers.service';

@Component({
  selector: 'app-avengers-map',
  templateUrl: './avengers-map.component.html',
  styleUrls: ['./avengers-map.component.css']
})
export class AvengersMapComponent {

  constructor(private avengersService: AvengersService) { }
  
  coordinates: any[] = [];

  getAllCoordinates() {
    this.avengersService.getAllCoordinates()
      .subscribe(response => {
        this.coordinates = response;
      });
  }
}
