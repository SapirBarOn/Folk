import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterMainComponent } from './enter-main.component';

describe('EnterMainComponent', () => {
  let component: EnterMainComponent;
  let fixture: ComponentFixture<EnterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
