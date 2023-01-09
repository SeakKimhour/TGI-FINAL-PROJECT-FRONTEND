/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sign_inComponent } from './sign_in.component';

describe('Sign_inComponent', () => {
  let component: Sign_inComponent;
  let fixture: ComponentFixture<Sign_inComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sign_inComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sign_inComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
