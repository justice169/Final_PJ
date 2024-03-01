import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestBodyweightComponent } from './chest-bodyweight.component';

describe('ChestBodyweightComponent', () => {
  let component: ChestBodyweightComponent;
  let fixture: ComponentFixture<ChestBodyweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChestBodyweightComponent]
    });
    fixture = TestBed.createComponent(ChestBodyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
