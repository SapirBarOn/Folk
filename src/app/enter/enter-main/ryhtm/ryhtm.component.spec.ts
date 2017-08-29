import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RyhtmComponent } from './ryhtm.component';

describe('RyhtmComponent', () => {
  let component: RyhtmComponent;
  let fixture: ComponentFixture<RyhtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RyhtmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RyhtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
