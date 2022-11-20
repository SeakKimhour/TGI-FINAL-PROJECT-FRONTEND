import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryComponentComponent } from './admin-category-component.component';

describe('AdminCategoryComponentComponent', () => {
  let component: AdminCategoryComponentComponent;
  let fixture: ComponentFixture<AdminCategoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
