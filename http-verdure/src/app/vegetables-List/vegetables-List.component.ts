import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../vegetables.model';
import { VegetableService } from '../vegetable.service';
import { VegetableListComponent } from './vegetables-list/vegetable-list.component';




@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent implements OnInit {
  vegetables: Vegetable[] = [];

  constructor(private vegetableService: VegetableService) {}

  ngOnInit() {
    this.vegetableService.getVegetables().subscribe(vegetables => {
      this.vegetables = vegetables;
    });
  }
}
