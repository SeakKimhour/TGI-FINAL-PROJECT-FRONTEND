import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrandComponentComponent } from './admin page/admin-brand-component/admin-brand-component/admin-brand-component.component';
import { AdminCategoryComponentComponent } from './admin page/admin-category-component/admin-category-component.component';
import { CreateCategoryComponent } from './admin page/admin-category-component/create-category/create-category.component';
import { EditCategoryComponent } from './admin page/admin-category-component/edit-category/edit-category.component';
import { AdminSubCategoryComponentComponent } from './admin page/admin-subcategory-component/admin-sub-category-component/admin-sub-category-component.component';
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
      path: 'category/create',
      component: CreateCategoryComponent,
    },
    {
      path: 'category/edit:id',
      component: EditCategoryComponent,
    },
    {
      path: 'sub-category',
      component: AdminSubCategoryComponentComponent,

    }, {
      path: 'brand',
      component: AdminBrandComponentComponent,

    },]
  }

];

@NgModule({
  imports: [RouterModule.forChild(Adminroutes)],
  exports: [RouterModule]
})
export class AdminComponentRoutingModule {
  static component = [AdminComponentComponent]
}
