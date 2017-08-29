import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNavComponent } from './intro-nav.component';

describe('IntroNavComponent', () => {
  let component: IntroNavComponent;
  let fixture: ComponentFixture<IntroNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
