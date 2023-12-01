import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMIComponent } from './bmi.component';

describe('BMIComponent', () => {
  let component: BMIComponent;
  let fixture: ComponentFixture<BMIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BMIComponent]
    });
    fixture = TestBed.createComponent(BMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
