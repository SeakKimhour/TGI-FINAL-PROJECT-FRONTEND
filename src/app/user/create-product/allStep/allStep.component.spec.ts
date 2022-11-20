/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllStepComponent } from './allStep.component';

describe('AllStepComponent', () => {
  let component: AllStepComponent;
  let fixture: ComponentFixture<AllStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
