import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { popularproduct } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BaseUrl: string = "http://localhost:8979";
  constructor(private http: HttpClient, private route: Router) { }

  // seller product service post product details 
  sellerAddProduct(productDetails:any){
    return this.http.post(this.BaseUrl + "/product/add",productDetails);
  }

// Seller servie get seller products
sellerProducts(sellerId:number){
  const mapping = "/product/seller-products/"+sellerId
  return this.http.get(this.BaseUrl+mapping);
}
getAllProducts(){
  return this.http.get(this.BaseUrl+"/product/all-products") ; 
}
// particular product details
productdetails(productId:any){
  return this.http.get(this.BaseUrl+"/product/product-details/"+productId);
}
//delete product by id
deleteproducts(productId:number){
  const mapping = "/product/delete/"+productId
  return this.http.get(this.BaseUrl+mapping);

}

//*********************************************** Popular products **************************************
savepopularProduct(popularproduct:any){
  
  return this.http.post(this.BaseUrl+"/product/add-to-dashboard",popularproduct);
}

deletePopularProduct(popularProductId:number){
  return this.http.get(this.BaseUrl+ "/product/remove-from-dashboard/"+popularProductId)
}
allPopularproducts(){
  return this.http.get(`${this.BaseUrl}/product/get-all-popular-products`);
}
dashboardfunc(Id:number,popularproducts:any){
  let flag: boolean = false;
  let deleteId:number;
  this.http.get(`${this.BaseUrl}/product/get-all-popular-products`).subscribe((result:any)=>{
    for (let i = 0; i < result.length; i++) {
      if(Id == result[i].productId){
        flag= true;
        deleteId = result[i].id;
      }
    }
    if(!flag){
      if(window.confirm("Add as a Popular Products on Dashboard!!")){

        this.savepopularProduct(popularproducts).subscribe((result:any)=>{
          console.log(result)
        })
      }
    }else{
      if(window.confirm("Remove as a Popular Products from Dashboard!!")){
        this.deletePopularProduct(deleteId).subscribe((result)=>{
          console.log(result)
        })
      }
    }
    console.log(result)
  })
}
//*********************************************** Search products **************************************
searchProducts(query:String){
  
    return this.http.get(this.BaseUrl+"/product/search/"+query)
  
}

}
