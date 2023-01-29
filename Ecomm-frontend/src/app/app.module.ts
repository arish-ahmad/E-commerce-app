import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerSignupComponent } from './Components/Seller/seller-signup/seller-signup.component';
import { SellerLoginComponent } from './Components/Seller/seller-login/seller-login.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';

import { FormsModule } from '@angular/forms'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SellerService } from './Services/seller.service';
import { SellerHomeComponent } from './Components/Seller/seller-home/seller-home.component';
import { SellerauthGuard } from './Auth/sellerauth.guard';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { SellerAddProductsComponent } from './Components/Seller/seller-add-products/seller-add-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerUpdateProductsComponent } from './Components/Seller/seller-update-products/seller-update-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './Components/footer/footer.component';
import { SearchPageComponent } from './Components/search-page/search-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserLoginComponent } from './Components/User/user-login/user-login.component';
import { UserSignupComponent } from './Components/User/user-signup/user-signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerSignupComponent,
    SellerLoginComponent,
    SellerHomeComponent,
    SellerAddProductsComponent,
    SellerUpdateProductsComponent,
    FooterComponent,
    SearchPageComponent,
    ProductDetailsComponent,
    UserLoginComponent,
    UserSignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    MatSidenavModule,
   
   
    
  ],
  //[{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
  providers: [SellerService, SellerauthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
