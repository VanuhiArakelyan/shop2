import { Component ,OnInit} from '@angular/core';
import {FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MainService } from '../../services/main.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { IshopProd, IcartProd  } from '../../Interface/product-description';
import { LoginService } from 'src/app/services/loginService.service';
import { ProductListService } from 'src/app/services/product-list.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
  tab =false
  cartList:IcartProd[] = []
  total:number = 0
  user = {}
  products = this.productListService.products
  addItem:IcartProd = this.cartItemsService.addItem

  addAddressForm = new FormGroup({
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('',Validators.required),
  companyName: new FormControl(''),
  country: new FormControl('',Validators.required),
  streetAddress: new FormControl('',Validators.required),
  postcode: new FormControl('',Validators.required),
  town: new FormControl('',Validators.required),
  phone: new FormControl('',Validators.required),
  email: new FormControl('',Validators.required),
  check1:new FormControl(''),
  check2:new FormControl(''),
  note:new FormControl('')
})
  constructor(
    private mainService:MainService,
    private cartItemsService:CartItemsService,
    private authService:LoginService,
    private productListService: ProductListService,
    private router:Router ){

      window.scroll(0,0)
    }
  ngOnInit(): void {
  this.cartItemsService.getCardList()
  this.cartList = this.cartItemsService.cartList
  this.total = this.cartItemsService.total
  }


order(){
if(this.authService.isLogedIn()){
  this.cartItemsService.order = this.addAddressForm.value
  console.log( this.cartItemsService.order)
  this.cartItemsService.orderDetails.push(this.addAddressForm.value)
  console.log(this.cartItemsService.orderDetails)
  this.router.navigateByUrl('/order-details')
}else{ this.router.navigateByUrl("/login")}
}
}
