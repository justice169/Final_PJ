import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMainComponent } from './article-main.component';

describe('ArticleMainComponent', () => {
  let component: ArticleMainComponent;
  let fixture: ComponentFixture<ArticleMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleMainComponent]
    });
    fixture = TestBed.createComponent(ArticleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
