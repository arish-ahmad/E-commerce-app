import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { login, signUp, userdetails } from './data-type';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLogedin = new BehaviorSubject<boolean>(false)
  BaseUrl: string = "http://localhost:8979";
  invalidUserAuth = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private route: Router) { }

// Seller login service post username & password
  sellerlogin(data: login) {
    this.http.post(this.BaseUrl + "/token", data).subscribe(
      (response: any) => {
        if(response.role == "Admin"){
          console.log(response)
          this.isSellerLogedin.next(true);
          this.invalidUserAuth.emit(false);
          localStorage.setItem("token", JSON.stringify(response.token))
          this.route.navigate(["seller-home"]);
        }else{
          this.invalidUserAuth.emit(true);
        }
        
      },
      (error) => {
        console.log(error)
        alert(error)
      });

  }

// Seller sign up service post seller details 
  sellersignup(data: signUp) {
    data.role = "Admin"
    this.http
      .post(this.BaseUrl + "/seller/signup", data)
      .subscribe((response: any) => {
        if (response) {
          alert(response.message)
          this.route.navigate(["seller-login"]);

        }
      })
  }
// seller service get seller details with the help of token 
  sellerDetails(token: any) {
    const sellerMapping: String = "/seller/get-details/" + token.slice(1, -1);
    return this.http.get(this.BaseUrl + sellerMapping);

  }

// method to check seller is loged in or not 
  reloadseller() {
    if (localStorage.getItem("token")) {
      this.isSellerLogedin.next(true);
      this.route.navigate(["seller-home"]);
    }
  }

}
