import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMangaComponent } from './search-manga.component';

describe('SearchMangaComponent', () => {
  let component: SearchMangaComponent;
  let fixture: ComponentFixture<SearchMangaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMangaComponent]
    });
    fixture = TestBed.createComponent(SearchMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
