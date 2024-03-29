import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinComponent } from './thin.component';

describe('ThinComponent', () => {
  let component: ThinComponent;
  let fixture: ComponentFixture<ThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
