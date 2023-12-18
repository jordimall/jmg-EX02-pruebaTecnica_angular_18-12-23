import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaShowComponent } from './pelicula-show.component';

describe('PeliculaShowComponent', () => {
  let component: PeliculaShowComponent;
  let fixture: ComponentFixture<PeliculaShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculaShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
