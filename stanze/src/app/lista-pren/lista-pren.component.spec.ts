import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrenComponent } from './lista-pren.component';

describe('ListaPrenComponent', () => {
  let component: ListaPrenComponent;
  let fixture: ComponentFixture<ListaPrenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPrenComponent]
    });
    fixture = TestBed.createComponent(ListaPrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
