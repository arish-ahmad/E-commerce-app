import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/Services/data-type';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private route:Router,private service :UserService) { }

  ngOnInit(): void {
  }
userLogin(data:login){
  if(data){
    this.service.userLogin(data);
  }

}
openUserSignup(){
this.route.navigate(['user-signup'])
}
}
