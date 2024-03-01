import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent04Component } from './article-content04.component';

describe('ArticleContent04Component', () => {
  let component: ArticleContent04Component;
  let fixture: ComponentFixture<ArticleContent04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleContent04Component]
    });
    fixture = TestBed.createComponent(ArticleContent04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
