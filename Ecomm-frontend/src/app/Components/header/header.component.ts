import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

import { ProductService } from 'src/app/Services/product.service';

import { productdetails } from 'src/app/Services/data-type';
import { hide } from '@popperjs/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from 'stream';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cancelIcon=faXmark
  userIcon =faUser;
  cartIcon = faCartShopping;
  navBar:any;
  @Input() navBarToggle:any;

  constructor(private route: Router, private service: ProductService, private activeRoute: ActivatedRoute) { 
  }
  menuType: String = 'default';
  menuIcon = faBars ;
  searchResult: productdetails[] | undefined;

  ngOnInit(): void {

    this.headerMenu();
    //this.searchQuery(query);
  }
  headerMenu() {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        //)
        if (localStorage.getItem("token") && val.url.includes("seller")) {
          if (val.url.includes("/seller-add-products") || val.url.includes("/seller-update-product")) {
            this.menuType = 'seller-add-products';
          } else {
            this.menuType = 'seller-menu';
          }
          //console.log("inside seller")
          //console.log(val.url)


        } else {
          //console.log("outside seller")
          this.menuType = 'default'
        }
      }
    })
  }
  logout() {
    if (window.confirm("Are you sure!!")) {
      localStorage.clear();
      this.route.navigate(['seller-login'])
    }
  }
  SearchProducts(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      if (element.value) {
        this.service.searchProducts(element.value).subscribe((result: any) => {
          this.searchResult = result;
          console.log(this.searchResult)
        })
      }
    }
  }
  hideSearch() {
    this.searchResult = undefined;
  }
  searchQuery(query: any) {
    if (query) {
      console.log(query.searchval)

      this.route.navigate([`search/${query.searchval}`]);

      
      this.ngOnInit()



    }

  }
  redirectToProductPage(id:number) {
    this.route.navigate([`details/${id}`]);
  }
  navigateToSeller(){
    this.route.navigate(['seller-home'])
  }

}





