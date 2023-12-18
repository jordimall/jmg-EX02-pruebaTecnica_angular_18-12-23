import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieShowComponent } from './serie-show.component';

describe('SerieShowComponent', () => {
  let component: SerieShowComponent;
  let fixture: ComponentFixture<SerieShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerieShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
