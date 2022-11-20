import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBrandComponentComponent } from './admin-brand-component.component';

describe('AdminBrandComponentComponent', () => {
  let component: AdminBrandComponentComponent;
  let fixture: ComponentFixture<AdminBrandComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBrandComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBrandComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
