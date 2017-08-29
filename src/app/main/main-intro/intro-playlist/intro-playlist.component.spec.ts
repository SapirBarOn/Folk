import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPlaylistComponent } from './intro-playlist.component';

describe('IntroPlaylistComponent', () => {
  let component: IntroPlaylistComponent;
  let fixture: ComponentFixture<IntroPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
