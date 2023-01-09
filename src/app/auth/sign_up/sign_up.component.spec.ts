/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sign_upComponent } from './sign_up.component';

describe('Sign_upComponent', () => {
  let component: Sign_upComponent;
  let fixture: ComponentFixture<Sign_upComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sign_upComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sign_upComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
