import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CassettaComponent } from './cassetta.component';

describe('CassettaComponent', () => {
  let component: CassettaComponent;
  let fixture: ComponentFixture<CassettaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CassettaComponent]
    });
    fixture = TestBed.createComponent(CassettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
