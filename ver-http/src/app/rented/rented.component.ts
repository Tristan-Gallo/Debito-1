import { Component, Input, OnInit } from '@angular/core';
import { DrivingModel } from '../driving.model';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css']
})
export class RentedComponent implements OnInit {
  @Input() rentedDriving: DrivingModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}