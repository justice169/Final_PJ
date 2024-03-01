import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdomenDumbbellsComponent } from './abdomen-dumbbells.component';

describe('AbdomenDumbbellsComponent', () => {
  let component: AbdomenDumbbellsComponent;
  let fixture: ComponentFixture<AbdomenDumbbellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbdomenDumbbellsComponent]
    });
    fixture = TestBed.createComponent(AbdomenDumbbellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
