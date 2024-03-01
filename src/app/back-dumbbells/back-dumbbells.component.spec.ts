import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackDumbbellsComponent } from './back-dumbbells.component';

describe('BackDumbbellsComponent', () => {
  let component: BackDumbbellsComponent;
  let fixture: ComponentFixture<BackDumbbellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackDumbbellsComponent]
    });
    fixture = TestBed.createComponent(BackDumbbellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
