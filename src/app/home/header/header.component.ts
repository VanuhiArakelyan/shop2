import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { IcartProd, IshopProd } from 'src/app/Interface/product-description';
import { LoginService } from 'src/app/services/loginService.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { ProductListService } from 'src/app/services/product-list.service';
import { RouteReuseStrategy, Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showInput = false;
  user = ""
  total = 0
  products = this.productListService.products
  bagItems: IshopProd[] = []
  cartList:IcartProd[] = []
  search = ''
  border:boolean = false
  navBar:boolean = false
  menu:boolean = false
  addItem:IcartProd = this.cartItemsService.addItem

  
  constructor(
    private authService: LoginService,
    private productListService: ProductListService,
    private cartItemsService: CartItemsService,
    private router:Router) { 
      
      this.products.map(el => {
        if(el.discount){
          el.newPrice = (el.price - (el.price * el.discount / 100))
        }
      })
     
  }
  
  ngOnInit(): void {

    this.authService.subject.subscribe(res=>{
      this.user = JSON.parse(localStorage.getItem("user") || "{}")?.username
      console.log(this.user)
    })
    if(this.user){
      let cartItems = JSON.parse(localStorage.getItem("user") || "{}").bagItems
      this.products.forEach(el => {
        cartItems.find((x: any) => {
          if(x === el.id)
            this.bagItems.push(el)
        })
    })
  }else{
  this.cartItemsService.getCardList()
  this.cartList = this.cartItemsService.cartList
  this.total = this.cartItemsService.total
  }

  this.authService.subject.next('')
  }

  isLogedIn() {
    return this.authService.isLogedIn()
  }

  searchItem() {
    this.productListService.search = this.search
    this.search = " "
   
    if(this.showInput){
     this.router.navigateByUrl("/shop")
  }
  };

  openNav() {
    this.navBar= !this.navBar
    let nav = document.getElementById("mySidenav") || null
    nav ? nav.style.display = "flex" : null
  }


  decriment(item: any) {
    this.cartItemsService.getCardList().find(el => { if (el.id === item.id && el.num > 0){
      el.num--;
      this.total -= item.newPrice;}
    })
    localStorage.setItem('cards', JSON.stringify(this.cartItemsService.cartList))
    this.cartList = this.cartItemsService.cartList
    console.log(this.cartList)
   
  }

  increment(item: any) {
    this.cartItemsService.setCardList(item)
    this.cartList = this.cartItemsService.cartList
    console.log(this.cartList)
    this.total = this.total + item.newPrice
  }
  removeItem(item: any) {
    this.cartList.find(el => {
      if (el.id === item.id)
        this.cartItemsService.getCardList().splice(this.cartList.indexOf(item), 1)
      localStorage.setItem('cards', JSON.stringify(this.cartItemsService.cartList))
      this.cartList = this.cartItemsService.cartList
      console.log(this.cartList)
      if(el.num > 0){this.total-= item.newPrice }
    })

  }

}


