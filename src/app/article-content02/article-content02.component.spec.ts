import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent02Component } from './article-content02.component';

describe('ArticleContent02Component', () => {
  let component: ArticleContent02Component;
  let fixture: ComponentFixture<ArticleContent02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleContent02Component]
    });
    fixture = TestBed.createComponent(ArticleContent02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
