import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeNewComponent } from './anime-new.component';

describe('AnimeNewComponent', () => {
  let component: AnimeNewComponent;
  let fixture: ComponentFixture<AnimeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
