import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterHeaderComponent } from './enter-header.component';

describe('EnterHeaderComponent', () => {
  let component: EnterHeaderComponent;
  let fixture: ComponentFixture<EnterHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
