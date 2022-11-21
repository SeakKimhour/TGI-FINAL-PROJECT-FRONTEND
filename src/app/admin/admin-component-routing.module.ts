import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrandComponentComponent } from './admin page/admin-brand-component/admin-brand-component/admin-brand-component.component';
import { AdminCategoryComponentComponent } from './admin page/admin-category-component/admin-category-component.component';
import { AdminSubCategoryComponentComponent } from './admin page/admin-subcategory-component/admin-sub-category-component/admin-sub-category-component.component';
import { BrandReactiveFormComponent } from './admin page/brand-reactive-form/brand-reactive-form.component';
import { AdminComponentComponent } from './admin-component.component';

export const Adminroutes: Routes = [
  {
    path: "",
    component: AdminComponentComponent,
    children: [{
      path: '',
      redirectTo: 'category',
      pathMatch: 'full'
    },
    {
      path: 'category',
      component: AdminCategoryComponentComponent,

    },
    {
      path: 'sub-category',
      component: AdminSubCategoryComponentComponent,

    },
    {
      path: 'brand',
      component: AdminBrandComponentComponent,

    },
    {
      path: 'brand-form',
      component: BrandReactiveFormComponent,

    },
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(Adminroutes)],
  exports: [RouterModule]
})
export class AdminComponentRoutingModule {
  static component = [AdminComponentComponent]
}
