import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroContentComponent } from './intro-content.component';

describe('IntroContentComponent', () => {
  let component: IntroContentComponent;
  let fixture: ComponentFixture<IntroContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
