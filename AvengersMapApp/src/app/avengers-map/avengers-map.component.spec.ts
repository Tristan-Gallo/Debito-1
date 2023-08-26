import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersMapComponent } from './avengers-map.component';

describe('AvengersMapComponent', () => {
  let component: AvengersMapComponent;
  let fixture: ComponentFixture<AvengersMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvengersMapComponent]
    });
    fixture = TestBed.createComponent(AvengersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
