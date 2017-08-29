import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroAlbumsComponent } from './intro-albums.component';

describe('IntroAlbumsComponent', () => {
  let component: IntroAlbumsComponent;
  let fixture: ComponentFixture<IntroAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
