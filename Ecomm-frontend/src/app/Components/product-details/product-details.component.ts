import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productdetails } from 'src/app/Services/data-type';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: productdetails | undefined;
  selectedSize:String | undefined;
  selectedColor:String | undefined;
  constructor(private activateRoute:ActivatedRoute, private service:ProductService, private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.displayProductDetails();
  }
  displayProductDetails(){
    let id = this.activateRoute.snapshot.paramMap.get('id');
    if(id){
      this.service.productdetails(id).subscribe((details:any)=>{
        this.productDetails = details ;
       console.log(this.productDetails)
      })
    }
    

  }
  selectColor(color:String){
    this.selectedColor = color;
    console.log(this.selectedColor)
 }
 redirectToCategory(category:String){
  console.log(category)
  this.router.navigate([ `search/${category}`])
 }
  numberWithCommas(x:String) {
    return x.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
}
}
