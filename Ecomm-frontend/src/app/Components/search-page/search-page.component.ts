import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productdetails } from 'src/app/Services/data-type';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchResult: productdetails[] | undefined;
  allproducts: productdetails[] | undefined;
  query:String | null | undefined;
  constructor(private activeRoute:ActivatedRoute, private service:ProductService,private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.displayProducts()
    
  }
  displayProducts(){
    this.query = this.activeRoute.snapshot.paramMap.get('query')
    console.log(this.query)
    if (this.query) {
  
        this.service.searchProducts(this.query).subscribe((result: any) => {
          this.searchResult = result;
          console.log(this.searchResult)
        })
      }
    this.service.getAllProducts().subscribe((result:any)=>{
      this.allproducts = result;
    })
  }

  numberWithCommas(x:String) {
    return x.toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',');
}
viewProduct(id:number){
//console.log(id)
this.router.navigate([`details/${id}`])
}

}
