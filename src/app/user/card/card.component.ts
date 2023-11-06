import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CartItemsService } from '../../services/cart-items.service';
import { IshopProd, IcartProd  } from '../../Interface/product-description';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService.service';
import { ProductListService } from 'src/app/services/product-list.service';





@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements  OnInit{
  cartList:IcartProd[] = [] ;
  bagItems:number[] = [];
  addItem:IcartProd = this.cartItemsService.addItem
  products:IshopProd[] = this.productListService.products
  user = {}
  quantity:number = 0
  total = 0

  constructor(
    private http: HttpClient,
    private cartItemsService: CartItemsService,
    private productListService:ProductListService ,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private authService:LoginService ){
      window.scroll(0,0)
      this.cartItemsService.getCardList()
      this.cartList = this.cartItemsService.cartList
      this.total = this.cartItemsService.total
    }



ngOnInit(): void {
  window.scroll(0,0)
  this.authService.subject.subscribe(res=>{
    this.user =JSON.parse(localStorage.getItem("user") || "{}")

  })
    this.cartItemsService.getCardList()
    this.cartList = this.cartItemsService.cartList
    this.total = this.cartItemsService.total
 
}

decriment(item : IcartProd){
 this.cartItemsService.getCardList().find( el=> {if(el.id === item.id && el.num > 0)el.num--})
 localStorage.setItem('cards', JSON.stringify(this.cartItemsService.cartList))
 this.cartList = this.cartItemsService.cartList
 console.log(this.cartList)
}

increment(item: IcartProd){
  this.cartItemsService.setCardList(item)
  this.cartList = this.cartItemsService.cartList
  console.log(this.cartList)
}
removeItem(item:IcartProd){
this.cartList.find(el=> {
  if(el.id === item.id)
  this.cartItemsService.getCardList().splice(this.cartList.indexOf(item),1)
  localStorage.setItem('cards', JSON.stringify(this.cartItemsService.cartList))
  this.cartList = this.cartItemsService.cartList
  console.log(this.cartList)
  // http-> post
})

}
updateCart(){
  if(this.user){
    this.total = this.cartList.reduce((sum, el) => sum += (el.newPrice* el.num), 0)
  }else{
  this.cartItemsService.getCardList()
  this.total = this.cartItemsService.total
}
}

checkout(){
  this.router.navigateByUrl("/checkout")
}
}