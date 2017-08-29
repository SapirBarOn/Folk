import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSongsComponent } from './intro-songs.component';

describe('IntroSongsComponent', () => {
  let component: IntroSongsComponent;
  let fixture: ComponentFixture<IntroSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
