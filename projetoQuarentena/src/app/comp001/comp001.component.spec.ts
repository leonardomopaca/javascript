import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp001Component } from './comp001.component';

describe('Comp001Component', () => {
  let component: Comp001Component;
  let fixture: ComponentFixture<Comp001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
