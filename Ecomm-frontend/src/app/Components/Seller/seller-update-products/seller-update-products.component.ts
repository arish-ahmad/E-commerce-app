import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productdetails } from 'src/app/Services/data-type';
import { ProductService } from 'src/app/Services/product.service';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-seller-update-products',
  templateUrl: './seller-update-products.component.html',
  styleUrls: ['./seller-update-products.component.css']
})
export class SellerUpdateProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productservice: ProductService) { }
  productId: number | undefined
  productdetails = {
    productName: "",
    description: "",
    actualPrice: 0,
    size: "",
    discount: 0,
    category: "",
    color: "",
    imgUrl: ""

  }
  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.productId != null) {
      this.productservice.productdetails(this.productId).subscribe((result: any) => {
        console.log(result);
        this.productdetails.productName= result.productName;
        this.productdetails.description= result.description;
        this.productdetails.actualPrice= result.actualPrice;
        this.productdetails.size= result.size;
        this.productdetails.discount= result.discount;
        this.productdetails.category= result.category;
        this.productdetails.color= result.color;
        this.productdetails.imgUrl= result.imgUrl;
      })
    }
  }
  sellerupdate(data: any) {
    console.log(data)

  }
}
