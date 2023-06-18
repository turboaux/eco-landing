import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesMeterComponent } from './calories-meter.component';

describe('CaloriesMeterComponent', () => {
  let component: CaloriesMeterComponent;
  let fixture: ComponentFixture<CaloriesMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloriesMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
