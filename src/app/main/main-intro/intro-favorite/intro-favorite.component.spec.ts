import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroFavoriteComponent } from './intro-favorite.component';

describe('IntroFavoriteComponent', () => {
  let component: IntroFavoriteComponent;
  let fixture: ComponentFixture<IntroFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
