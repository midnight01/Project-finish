import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Follow3Component } from './follow3.component';

describe('Follow3Component', () => {
  let component: Follow3Component;
  let fixture: ComponentFixture<Follow3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Follow3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Follow3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
