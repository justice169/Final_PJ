import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestDumbbellsComponent } from './chest-dumbbells.component';

describe('ChestDumbbellsComponent', () => {
  let component: ChestDumbbellsComponent;
  let fixture: ComponentFixture<ChestDumbbellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChestDumbbellsComponent]
    });
    fixture = TestBed.createComponent(ChestDumbbellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
