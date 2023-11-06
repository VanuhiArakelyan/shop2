import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IshopProd, IcartProd  } from '.././Interface/product-description';


@Injectable({
  providedIn: 'root'
})
export class CartItemsService {

  constructor(private httpClient: HttpClient) { }
  
  cartList:IcartProd[] = []
  addItem:IcartProd = {
    id: 0,
    name: "",
    price:0,
    imageUrl:[],
    discount: 0,
    newPrice: 0,
    aditionalText: '',
    color: "",
    num: 0
  }
  
 total: number = 0
 order =  { 
    // firstName: "",
    // lastName: "",
    // companyName:"",
    // country: "",
    // streetAddress: "",
    // postcode: "",
    // town: "",
    // phone:"",
    // email: "",
    // check1:"",
    // check2:"",
    // note:""
  }
  orderDetails:object[] = []
  orders =[
    {
      orderNumber:1879605573994,
      email:"Vitathemes@Gmail.com",
      paymentMethod:"Mastercard*************7865",
      orderDate:"october 8,2020",
      deliveryOptions:"Standard delivery",
      deliveryAddress:"Kristian holst 34 old street W1F 7NU london United Kingdom",
      contact:+448749790988,
    }
    ]

  getCardList(){
    this.cartList = JSON.parse(localStorage.getItem('cards') || '[]')
    this.total = this.cartList.reduce((sum, el) => sum += (el.newPrice * el.num), 0)
    return this.cartList
  }

  setCardList(addItem : IcartProd){
    let cardsFromStorage = JSON.parse(localStorage.getItem('cards') || '[]')
    if(cardsFromStorage.some((x: any)=> x.id === addItem.id)){
    let elem = cardsFromStorage.find((x: any)=> x.id === addItem.id)
    if( elem){
      elem.num++
    }}else{
    cardsFromStorage.push(this.addItem)}


    localStorage.setItem('cards', JSON.stringify(cardsFromStorage))
    this.cartList = cardsFromStorage
    console.log(cardsFromStorage)
    return this.cartList

    // localStorage.clear()
  

}
}
