import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerSignupComponent } from '../Components/Seller/seller-signup/seller-signup.component';
import { SellerService } from '../Services/seller.service';

@Injectable({
  providedIn: 'root'
})
export class SellerauthGuard implements CanActivate {
  constructor(private service:SellerService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("token")){
        return true
    }
  
    return this.service.isSellerLogedin;
   
}
  
}
