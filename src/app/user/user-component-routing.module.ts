import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRouteGuardGuard } from 'app/service/guard/login/login-route-guard.guard';
import { AddProductComponent } from './create-product/add-product/add-product.component';
import { FavoriteProductComponent } from './favoriteProduct/favoriteProduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDisplayComponent } from './product display/product-display.component';
import { UserComponentComponent } from './user-component.component';

export const Userroutes: Routes = [
  {
    path: "",
    component: UserComponentComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: ProductDisplayComponent,
        canActivate:[LoginRouteGuardGuard]
      },
      {
        path: 'favorite',
        canActivate:[LoginRouteGuardGuard],
        component: FavoriteProductComponent
      },
      {
        path: 'add-product',
        canActivate:[LoginRouteGuardGuard],
        component: AddProductComponent
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(Userroutes) ],
  exports: [RouterModule]
})
export class UserComponentRoutingModule {
  static components = [UserComponentComponent,NavbarComponent];
 }
