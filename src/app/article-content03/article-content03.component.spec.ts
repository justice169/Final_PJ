import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent03Component } from './article-content03.component';

describe('ArticleContent03Component', () => {
  let component: ArticleContent03Component;
  let fixture: ComponentFixture<ArticleContent03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleContent03Component]
    });
    fixture = TestBed.createComponent(ArticleContent03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
