import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroCommentsComponent } from './intro-comments.component';

describe('IntroCommentsComponent', () => {
  let component: IntroCommentsComponent;
  let fixture: ComponentFixture<IntroCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
