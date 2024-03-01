import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent01Component } from './article-content01.component';

describe('ArticleContent01Component', () => {
  let component: ArticleContent01Component;
  let fixture: ComponentFixture<ArticleContent01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleContent01Component]
    });
    fixture = TestBed.createComponent(ArticleContent01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
