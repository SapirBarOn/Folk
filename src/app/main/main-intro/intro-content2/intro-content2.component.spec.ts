import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroContent2Component } from './intro-content2.component';

describe('IntroContent2Component', () => {
  let component: IntroContent2Component;
  let fixture: ComponentFixture<IntroContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
