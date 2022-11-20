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
import { AdminComponentComponent } from './admin/admin-component.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AdminCategoryComponentComponent } from './admin/admin page/admin-category-component/admin-category-component.component';
import { AdminSubCategoryComponentComponent } from './admin/admin page/admin-subcategory-component/admin-sub-category-component/admin-sub-category-component.component';
import { AdminBrandComponentComponent } from './admin/admin page/admin-brand-component/admin-brand-component/admin-brand-component.component';
import { TopSaleComponent } from './user/product display/topSale/topSale.component';
import { AllStepComponent } from './user/create-product/allStep/allStep.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { DiscountProductComponent } from './user/product display/discountProduct/discountProduct.component';
import { AddProductComponent } from './user/create-product/add-product/add-product.component';
import { UserComponentComponent } from './user/user-component.component';



const appRoutes : Routes = [
  {path: '', component: Sign_inComponent},
  {path: 'signin', component: Sign_inComponent,},
  {path: 'user', component: UserComponentComponent,},
  {path: 'home', component: ProductDisplayComponent,canActivate:[LoginRouteGuardGuard]},
  {path: 'signup', component: Sign_upComponent,},
  {path: 'profile', component: ProfileComponent,canActivate:[LoginRouteGuardGuard]},
  {path: 'favorite', component: FavoriteProductComponent,canActivate:[LoginRouteGuardGuard]},
  {path: 'step', component: AllStepComponent,canActivate:[LoginRouteGuardGuard]},
  {path: 'add-product', component: AddProductComponent,canActivate:[LoginRouteGuardGuard]},
  {path: 'admin/category', component: AdminCategoryComponentComponent},
  {path: 'admin/sub-category', component: AdminSubCategoryComponentComponent},
  {path: 'admin/brand', component: AdminBrandComponentComponent},




]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    AdminComponentComponent,
    AdminCategoryComponentComponent,
    AdminSubCategoryComponentComponent,
    AdminBrandComponentComponent,
    UserComponentComponent

  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
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
