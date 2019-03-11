import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Follow2Component } from './follow2.component';

describe('Follow2Component', () => {
  let component: Follow2Component;
  let fixture: ComponentFixture<Follow2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Follow2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Follow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
