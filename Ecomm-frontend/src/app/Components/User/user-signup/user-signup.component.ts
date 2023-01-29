import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { EmailService } from 'src/app/Services/email.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  otp: number | undefined;
  otpColor="red";
  otpMatch=false;
  counter = 30;
  sendOtp:boolean=false;
  constructor(private emailservice: EmailService, private service:UserService) { }
  sencodeStatus: boolean = true;
  ngOnInit(): void {

  }
  userSubmit(data: any) {
    this.service.userSignUp(data) ; 
    console.log(data)
  }
  openUserLogin() {
    
  }
  sendCode(email: String, username: String) {
    console.log(email, username)
    this.emailservice.validateEmail(email, username).subscribe((response: any) => {
      this.otp = response.otp;
      console.log(this.otp);
    })
    this.counter = 30;
    this.sencodeStatus = false;

    const interval = setInterval(() => {
      this.counter--;
      if(this.counter==0){
        clearInterval(interval);
      }
    }, 1000);

  }
  sendCodeAgain(email: String, username: String){
    this.emailservice.validateEmail(email, username).subscribe((response: any) => {
      this.otp = response.otp;
      console.log(this.otp);
      this.sendOtp = true ;
    })
  }
  matchOtp(otp_val: KeyboardEvent) {
    if (otp_val) {
      console.log(otp_val)
      if (Number(otp_val) == this.otp) {
        console.log("otp matched");
        this.otpMatch = true ; 
        this.otpColor= "green";
      }else{
        console.log("otp not matched");
        this.otpColor= "red";
        this.otpMatch = false ; 
      }
    }
  }
}
