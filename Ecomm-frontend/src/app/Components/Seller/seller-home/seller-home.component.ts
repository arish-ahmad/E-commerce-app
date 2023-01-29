import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { listenerCount } from 'process';
import { popularproduct, userdetails } from 'src/app/Services/data-type';
import { SellerService } from 'src/app/Services/seller.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  constructor(public productservice: ProductService, public sellerservice: SellerService, private route: Router) { }
  token: String | null = localStorage.getItem("token")
  sellerData!: userdetails;
  productList: any;
  displayUsername: String = "";
  deleteicon = faTrash;
  updateicon = faPenToSquare;
  popularicon = faStar;
  flag: Boolean = false;
  arr: any = []
  popularproducts = {
    productId: 0
  };
  @ViewChild('productCategory') productCategory!: ElementRef;
  category="All";


  ngOnInit(): void {
   this.sessionChecking();
    
  }
  sessionChecking(){
    if (this.token) {
      this.sellerservice.sellerDetails(this.token).subscribe((response: any) => {
        console.log(response)
        this.sellerData = response;
        localStorage.setItem("sellerId", JSON.stringify(response.id));
        this.displayUsername = this.sellerData.username;
        this.plist();
      }, (error) => {
        if (window.confirm("Session Expired Please Login again!!")) {
          localStorage.removeItem("token");
          this.route.navigate(['seller-login'])
        }
        else {
          this.route.navigate([""])
        }
        console.log(error);
      })
    } else {
      if (window.confirm("Session Expired Please Login again!!")) {
        this.route.navigate(['seller-login'])
      }
      else {
        this.route.navigate([""])
      }
    }
  }
  plist() {
    this.productservice.sellerProducts(this.sellerData.id).subscribe((products: any) => {
      if(this.category == "All"){
        this.productList = products;
      }else{
       this.productList = [];
        for(let i=0;i<products.length;i++){
          if(products[i].category.toUpperCase() == this.category.toUpperCase()){
            console.log(products[i])
            this.productList.push(products[i]);
          }
          
        }
      }
  
    })
  }
  deleteproduct(Id: number) {
    if (window.confirm("Are you sure!!")) {
      this.productservice.deleteproducts(Id).subscribe((message: any) => {
    console.log(message)
      }, (error) => {
        alert(error);
      })

      this.ngOnInit();
      this.plist;
    }
  }
  updateroute(productid: number) {

  }
  favorite(Id: number) {
    //data to be saved in database
    this.popularproducts.productId = Id;
    this.productservice.dashboardfunc(Id, this.popularproducts)
    // getting all popular products
  }
  onSelected(){
    console.log(this.productCategory.nativeElement.value)
    this.category = this.productCategory.nativeElement.value;
    this.plist()
  }
  numberWithCommas(x:String) {
    return x.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
}
}
