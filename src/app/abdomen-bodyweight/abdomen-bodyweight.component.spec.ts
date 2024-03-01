import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdomenBodyweightComponent } from './abdomen-bodyweight.component';

describe('AbdomenBodyweightComponent', () => {
  let component: AbdomenBodyweightComponent;
  let fixture: ComponentFixture<AbdomenBodyweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbdomenBodyweightComponent]
    });
    fixture = TestBed.createComponent(AbdomenBodyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
