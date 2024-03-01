import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackBodyweightComponent } from './back-bodyweight.component';

describe('BackBodyweightComponent', () => {
  let component: BackBodyweightComponent;
  let fixture: ComponentFixture<BackBodyweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackBodyweightComponent]
    });
    fixture = TestBed.createComponent(BackBodyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
