import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  BaseUrl: string = "http://localhost:8979";
  
  constructor(private http: HttpClient) { }

  validateEmail(email:String,username:String){
    const validation={
      email:email,
      username:username
    } 
    return this.http.post(this.BaseUrl+"/email-verification",validation) ;
  }
}
