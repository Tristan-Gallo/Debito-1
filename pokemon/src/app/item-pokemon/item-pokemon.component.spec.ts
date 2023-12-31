import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPokemonComponent } from './item-pokemon.component';

describe('ItemPokemonComponent', () => {
  let component: ItemPokemonComponent;
  let fixture: ComponentFixture<ItemPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPokemonComponent]
    });
    fixture = TestBed.createComponent(ItemPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
