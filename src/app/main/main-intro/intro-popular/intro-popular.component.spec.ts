import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPopularComponent } from './intro-popular.component';

describe('IntroPopularComponent', () => {
  let component: IntroPopularComponent;
  let fixture: ComponentFixture<IntroPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
