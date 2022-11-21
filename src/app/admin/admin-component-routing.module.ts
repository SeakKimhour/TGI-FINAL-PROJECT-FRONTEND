import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      path: 'sub-category',
      loadChildren: () => import('./admin page/admin-subcategory-component/admin-sub-category-component/admin-subcategory.module').then(m => m.AdminSubCategoryModule),

    },

    {
      path: 'brand',
      loadChildren: () => import('./admin page/admin-brand-component/admin-brand-component/admin-brand.module').then(m => m.AdminBrandModule),

    },

    {
      path: 'category',
      loadChildren: () => import('./admin page/admin-category-component/admin-category.module').then(m => m.AdminCategoryModule),
    }

    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(Adminroutes)],
  exports: [RouterModule]
})
export class AdminComponentRoutingModule {
  static component = [AdminComponentComponent]
}
