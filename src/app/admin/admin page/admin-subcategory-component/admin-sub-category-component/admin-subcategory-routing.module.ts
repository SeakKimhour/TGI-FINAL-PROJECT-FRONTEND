import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminSubCategoryComponentComponent } from './admin-sub-category-component.component';
import { CreateSubCategoryComponent } from './create-sub-category/create-sub-category.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';


const routes: Routes = [
  {
    path: '',
    component: AdminSubCategoryComponentComponent
  },
  {
    path: 'new',
    component: CreateSubCategoryComponent
  },
  {
    path: ':id',
    component: EditSubCategoryComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSubCategoryComponentRoutingModule {
  static component = [CreateSubCategoryComponent,EditSubCategoryComponent]
}
