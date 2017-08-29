import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFooterComponent } from './enter-footer.component';

describe('EnterFooterComponent', () => {
  let component: EnterFooterComponent;
  let fixture: ComponentFixture<EnterFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
