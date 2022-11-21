import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateBrandComponent } from "./create-brand/create-brand.component";
import { AdminBrandComponentComponent } from './admin-brand-component.component';
import { EditBrandComponent } from './edit-brand/edit-brand.component';

const routes: Routes = [
  {
    path: '',
    component: AdminBrandComponentComponent
  },
  {
    path: 'new',
    component: CreateBrandComponent
  },
  {
    path: ':id',
    component: EditBrandComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBrandComponentRoutingModule {
  static component = [CreateBrandComponent,EditBrandComponent]
}
