import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeModifComponent } from './anime-modif.component';

describe('AnimeModifComponent', () => {
  let component: AnimeModifComponent;
  let fixture: ComponentFixture<AnimeModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
