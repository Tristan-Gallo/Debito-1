import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesListComponent } from './vegetables-List.component';

describe('VegetablesListComponent', () => {
  let component: VegetablesListComponent;
  let fixture: ComponentFixture<VegetablesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegetablesListComponent]
    });
    fixture = TestBed.createComponent(VegetablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
