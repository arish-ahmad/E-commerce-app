import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/Services/seller.service';
import { signUp } from 'src/app/Services/data-type';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {
  
  constructor(private sellerservice:SellerService,private route:Router) { }

  ngOnInit(): void {
   
  }
  sellersubmit(data:signUp){
    this.sellerservice.sellersignup(data)
  }
  openlogin(){
    this.route.navigate(["seller-login"])
  }

}
