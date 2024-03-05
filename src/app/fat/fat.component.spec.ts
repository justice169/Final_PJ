import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatComponent } from './fat.component';

describe('FatComponent', () => {
  let component: FatComponent;
  let fixture: ComponentFixture<FatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
