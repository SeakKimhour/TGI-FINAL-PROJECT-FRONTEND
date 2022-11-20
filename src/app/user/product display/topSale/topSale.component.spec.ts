/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopSaleComponent } from './topSale.component';

describe('TopSaleComponent', () => {
  let component: TopSaleComponent;
  let fixture: ComponentFixture<TopSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
