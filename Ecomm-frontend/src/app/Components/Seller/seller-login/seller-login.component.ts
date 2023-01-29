import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/Services/data-type';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

  invalidAuth = "";
  constructor(private route:Router,public  sellerservice:SellerService) { }

  ngOnInit(): void {
    this.sellerservice.reloadseller();
  }
  sellerlogin(data:login){
    console.log(data)
    this.sellerservice.sellerlogin(data);
    this.sellerservice.invalidUserAuth.subscribe((result:any)=>{
      if(result){
        this.invalidAuth ="please enter valid Admin details"
      }
      
    })
  }
  opensignup(){
    this.route.navigate(["seller-signup"])
  }

}
