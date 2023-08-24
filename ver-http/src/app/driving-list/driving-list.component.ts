

import { Component, OnInit } from '@angular/core';
import { Mezzo } from '.';
import { DrivingService } from './driving.service';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {
  mezzi: Mezzo[] = [];

  constructor(private drivingService: DrivingService) {}

  ngOnInit(): void {
    this.loadMezzi();
  }

  loadMezzi(): void {
    this.drivingService.getMezzi().subscribe(
      (mezzi: Mezzo[]) => {
        this.mezzi = mezzi;
      },
      error => {
        console.error('Errore nel recupero dei dati dei mezzi', error);
      }
    );
  }
}
