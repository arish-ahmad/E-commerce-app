import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { ProductService } from 'src/app/Services/product.service';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-seller-add-products',
  templateUrl: './seller-add-products.component.html',
  styleUrls: ['./seller-add-products.component.css']
})
export class SellerAddProductsComponent implements OnInit {
  sellerId = Number(localStorage.getItem("sellerId"));
  constructor(private productservice: ProductService, private route: Router) { }

  ngOnInit(): void {
  }
  selleradd(formdata: any) {
    formdata.sellerId = this.sellerId;
    const areEmpty = Object.values(formdata).every(
      value => value !=''
    );
    if(areEmpty){
      this.productservice.sellerAddProduct(formdata).subscribe((response: any) => {
        if (response) {
          alert(response.message)
          this.route.navigate(['seller-add-products'])
          console.log(formdata)
  
        }
      }, (error) => {
        alert(error)
        localStorage.clear();
        this.route.navigate(['seller-login'])
      })
    }else{
      alert("Please Fill all values!!!")
    }
  }

}
