import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubCategoryComponentComponent } from './admin-sub-category-component.component';

describe('AdminSubCategoryComponentComponent', () => {
  let component: AdminSubCategoryComponentComponent;
  let fixture: ComponentFixture<AdminSubCategoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubCategoryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSubCategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
