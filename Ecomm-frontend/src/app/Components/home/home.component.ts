import { Component, OnInit } from '@angular/core';
import { productdetails } from 'src/app/Services/data-type';
import { ProductService } from 'src/app/Services/product.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartIcon=faCartPlus ;
  productColor:String="blue"
  constructor(private productService:ProductService, private route:Router) { }

  //popular products list
  popularproducts: productdetails[] = [];

  //all product list
  allproducts: productdetails[] = [];
  
  ngOnInit(): void {
    this.dashboard()
    this.trendingProducts()
  }
  dashboard(){
    this.productService.allPopularproducts().subscribe((result:any)=>{
      for (let i = 0; i < result.length; i++) {
        this.productService.productdetails(result[i].productId).subscribe((result:any)=>{
        this.popularproducts?.push(result)
        //console.log(result)
        //console.log(this.popularproducts)
        })
      }
    },(error)=>{
      localStorage.clear();
    })
  }
  trendingProducts(){
    this.productService.getAllProducts().subscribe((result:any)=>{
      this.allproducts = result;
      console.log(this.allproducts)
    })
  }
  view(id:number){
    console.log("product clicked")
    this.route.navigate([`details/${id}`]);
  }
  numberWithCommas(x:number) {
    return x.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
}


}
