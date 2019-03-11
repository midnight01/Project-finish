import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Input4Component } from './input4.component';

describe('Input4Component', () => {
  let component: Input4Component;
  let fixture: ComponentFixture<Input4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Input4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Input4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
