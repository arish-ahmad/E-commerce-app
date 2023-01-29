import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerauthGuard } from './Auth/sellerauth.guard';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { SellerAddProductsComponent } from './Components/Seller/seller-add-products/seller-add-products.component';
import { SellerHomeComponent } from './Components/Seller/seller-home/seller-home.component';
import { SellerLoginComponent } from './Components/Seller/seller-login/seller-login.component';
import { SellerSignupComponent } from './Components/Seller/seller-signup/seller-signup.component';
import { SellerUpdateProductsComponent } from './Components/Seller/seller-update-products/seller-update-products.component';
import { UserLoginComponent } from './Components/User/user-login/user-login.component';
import { UserSignupComponent } from './Components/User/user-signup/user-signup.component';


const routes: Routes = [

  {
    path:"",
    component:HomeComponent
  },
  {
    path:"user-login",
    component:UserLoginComponent
  },
  {
    path:"user-signup",
    component:UserSignupComponent
  },
  {
    path:"seller-login",
    component:SellerLoginComponent
  },
  {
    path:"seller-signup",
    component:SellerSignupComponent
  },
  {
    path:"seller-home",
    component:SellerHomeComponent,
    canActivate:[SellerauthGuard]
  },
  {
    path:"seller-add-products",
    component:SellerAddProductsComponent,
    canActivate:[SellerauthGuard]
  },
  {
    path:"seller-update-product/:id",
    component:SellerUpdateProductsComponent,
    canActivate:[SellerauthGuard]
  },
  {
    path:"search/:query",
    component:SearchPageComponent,
  
  },
  {
    path:"details/:id",
    component:ProductDetailsComponent,
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
