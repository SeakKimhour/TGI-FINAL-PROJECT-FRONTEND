import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandService } from './service/brand.service';
import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';
import { ProductDisplayComponent } from './user/product display/product-display.component';
import { Sign_inComponent } from './auth/sign_in/sign_in.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-gard.service';
import { FeatureProductComponent } from './user/product display/featureProduct/featureProduct.component';
import { CategoryComponent } from './user/product display/category/category.component';
import { NewProductComponent } from './user/product display/newProduct/newProduct.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './user/profile/profile.component';
import { FavoriteProductComponent } from './user/favoriteProduct/favoriteProduct.component';
import { Sign_upComponent } from './auth/sign_up/sign_up.component';
import { LocalService } from './service/local-storage.service';
import { authHeader } from './service/auth-header.service';
import { NgxLoadingModule } from "ngx-loading";
import { TopSaleComponent } from './user/product display/topSale/topSale.component';
import { DiscountProductComponent } from './user/product display/discountProduct/discountProduct.component';
import { AddProductComponent } from './user/create-product/add-product/add-product.component';
import { AdminRouteGuardGuard } from './service/guard/admin/admin-route-guard.guard';
import { AdminCategoryComponentComponent } from './admin/admin page/admin-category-component/admin-category-component.component';
import { SubcategoryService } from './service/subcategory.service';
import { AdminBrandComponentComponent } from './admin/admin page/admin-brand-component/admin-brand-component/admin-brand-component.component';
import { AdminSubCategoryComponentComponent } from './admin/admin page/admin-subcategory-component/admin-sub-category-component/admin-sub-category-component.component';
import { AdminCategoryComponentRoutingModule } from './admin/admin page/admin-category-component/admin-category-routing.module';

import { AdminSubCategoryComponentRoutingModule } from './admin/admin page/admin-subcategory-component/admin-sub-category-component/admin-subcategory-routing.module';
import { AdminBrandComponentRoutingModule } from './admin/admin page/admin-brand-component/admin-brand-component/admin-brand-routing.module';

const appRoutes: Routes = [
  { path: '', component: Sign_inComponent },
  { path: 'signin', component: Sign_inComponent, },
  { path: 'signup', component: Sign_upComponent, },
  { path: 'admin', loadChildren: () => import('./admin/admin-component.module').then(m => m.AdminComponentModule), canActivate: [AdminRouteGuardGuard] },
  {
    path: 'user',
    loadChildren: () => import('./user/user-component.module').then(m => m.UserComponentModule),
  },
]
@NgModule({
  declarations: [
    ...AdminCategoryComponentRoutingModule.component,
    ...AdminSubCategoryComponentRoutingModule.component,
    ...AdminBrandComponentRoutingModule.component,
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
    AdminCategoryComponentComponent,
    AdminSubCategoryComponentComponent,
    AdminBrandComponentComponent,

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
    BrowserAnimationsModule
  ],
  providers: [ProductService, BrandService, CategoryService, AuthService, AuthGuardService, LocalService, authHeader, SubcategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
