import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login, signUp} from './data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLogedin = new BehaviorSubject<boolean>(false)
  BaseUrl: string = "http://localhost:8979";
  constructor(private http: HttpClient, private route: Router) { }


  // Seller sign up service post seller details 
  userSignUp(data: signUp) {
    data.role = "User" ; 
    this.http
      .post(this.BaseUrl + "/user/signup", data)
      .subscribe((response: any) => {
        if (response) {
          alert(response.message)
          this.route.navigate(["user-login"]);

        }
      })
  }

  userLogin(data: login) {
    this.http.post(this.BaseUrl + "/token", data).subscribe(
      (response: any) => {
        if(response.role == "User"){
          console.log(response)
          this.isUserLogedin.next(true);
      
          localStorage.setItem("userToken", JSON.stringify(response.token))
          this.route.navigate(["/"]);
        }else{
          console.log("incorrect values")
        }
        
      },
      (error) => {
        console.log(error)
        alert(error)
      });

  }
}
