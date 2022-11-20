import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandService } from './service/brand.service';
import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';

import { ProductDisplayComponent } from './user/product display/product-display.component';
import { Sign_inComponent } from './sign_in/sign_in.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-gard.service';
import { FeatureProductComponent } from './user/product display/featureProduct/featureProduct.component';

import { CategoryComponent } from './user/product display/category/category.component';
import { NewProductComponent } from './user/product display/newProduct/newProduct.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './user/profile/profile.component';
import { FavoriteProductComponent } from './user/favoriteProduct/favoriteProduct.component';
import { Sign_upComponent } from './sign_up/sign_up.component';
import { LocalService } from './service/local-storage.service';
import { authHeader } from './service/auth-header.service';
import { NgxLoadingModule } from "ngx-loading";
import { ToastrModule } from 'ngx-toastr';
import { LoginRouteGuardGuard } from './service/guard/login/login-route-guard.guard';
import { TopSaleComponent } from './user/product display/topSale/topSale.component';
import { DiscountProductComponent } from './user/product display/discountProduct/discountProduct.component';
import { AddProductComponent } from './user/create-product/add-product/add-product.component';
import { AdminRouteGuardGuard } from './service/guard/admin/admin-route-guard.guard';

const appRoutes : Routes = [
  {path: '', component: Sign_inComponent},
  {path: 'signin', component: Sign_inComponent,},
  {path: 'signup', component: Sign_upComponent,},
  {path: 'profile', component: ProfileComponent,canActivate:[LoginRouteGuardGuard]},
  {path: 'admin',   loadChildren: () => import('./admin/admin-component.module').then(m => m.AdminComponentModule),canActivate:[AdminRouteGuardGuard]},
  {
    path: 'user',
    loadChildren: () => import('./user/user-component.module').then(m => m.UserComponentModule),

  },
]
@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    Sign_inComponent,
    FeatureProductComponent,
    DiscountProductComponent,
    CategoryComponent,
    NewProductComponent,
    TopSaleComponent,
    ProfileComponent,
    FavoriteProductComponent,
    AddProductComponent,
    Sign_upComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    RouterModule.forRoot(appRoutes),
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut : 1000,
      progressBar : true,
      progressAnimation : 'increasing',
      preventDuplicates : true
  }),
  ],
  providers: [ProductService, BrandService, CategoryService, AuthService, AuthGuardService,LocalService,authHeader],
  bootstrap: [AppComponent]
})
export class AppModule { }
