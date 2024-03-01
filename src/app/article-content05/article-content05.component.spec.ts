import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContent05Component } from './article-content05.component';

describe('ArticleContent05Component', () => {
  let component: ArticleContent05Component;
  let fixture: ComponentFixture<ArticleContent05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleContent05Component]
    });
    fixture = TestBed.createComponent(ArticleContent05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
