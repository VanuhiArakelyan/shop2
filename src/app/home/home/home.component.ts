import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ProductListService } from 'src/app/services/product-list.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { IcartProd, IshopProd} from '../../Interface/product-description';
import { LoginService } from 'src/app/services/loginService.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  item = 0;


  products:IshopProd[] = this.productListService.products;
  selectedItem :IshopProd = {
    id:0,
    name: "",
    price: 0,
    slideImg:"",
    imageUrl: [],
    discount: 0,
    newPrice: 0,
    aditionalText:"",
    Categories: "",
    Description: "",
    Liked: false,
    AditionalInformation: {
        weight: "",
        dimentions: "",
        colours: "",
        material: ""
    },
    Reviews: [{
        name: "",
        stars: 0,
        text: "",
        date: ""
    }],
    SimilarItems:[],
    quantity:0,
    num:0
  }


  likedItems:number[] = []
  addItem:IcartProd = this.cartItemsService.addItem
  cartList:IcartProd[] = []
  visible:boolean = false
  user: object = {}




constructor(
  private productListService: ProductListService,
  private cartItemsService:CartItemsService,
  private authService :LoginService,
  private activatedRoute: ActivatedRoute , 
  private router: Router,
  private http: HttpClient

){
  window.scroll(0,0)
  
  this.authService.subject.subscribe(res=>{
    this.user = JSON.parse(localStorage.getItem("user") || "{}")
    if(this.user){
      this.likedItems = JSON.parse(localStorage.getItem("user") || "{}").likedItems
      this.products.find(el => {
        this.likedItems.find(x => {
          if(x === el.id) el.Liked = true}
          )
      })
    console.log(this.user)
 } 
 else{
  this.likedItems = this.productListService.getLikedList()
  this.products.find(el => {
    this.likedItems.find(x => {
      if(x === el.id) el.Liked = true}
      )
  })
 }
})
}


  ngOnInit(): void {
    this.products.map(el => {
      if(el.discount){
        el.newPrice = (el.price - (el.price * el.discount / 100))
      }
    })
}  
   

addToCart(product:IshopProd){
  if(product.quantity !== 0){ 
  this.addItem.id = product.id
  this.addItem.name = product.name 
  this.addItem.aditionalText = product.aditionalText
  this.addItem.color = product.AditionalInformation.colours
  this.addItem.discount = product.discount
  this.addItem.newPrice = product.newPrice
  this.addItem.price = product.price
  this.addItem.imageUrl = product.imageUrl
  this.addItem.num = 1
  this.cartItemsService.setCardList(this.addItem)
  this.cartList = this.cartItemsService.cartList
  console.log(this.cartList)
  }
 }

 redirectToItem(slide:any){
  this.productListService.goTo(slide)
  this.router.navigateByUrl("singleProduct/"+this.selectedItem.id)
}


   
 singleItem(selectedItem:any){
   this.productListService.goTo(selectedItem)
   this.selectedItem = this.productListService.selectedItem as IshopProd
   this.router.navigateByUrl("singleProduct/"+this.selectedItem.id)
}; 

addLike(product: IshopProd){
 product.Liked = !product.Liked
 console.log(product)
 this.productListService.setLikedList(product)
 this.likedItems = this.productListService.likedItems  
}
}
