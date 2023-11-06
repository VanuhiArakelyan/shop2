import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ProductListService } from '../../services/product-list.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { IcartProd, IshopProd} from '../../Interface/product-description';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/loginService.service';




@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products:IshopProd[] = this.productListService.products;
  sorts:string[] = ["by price", "by discount"];
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

  fillterForm= new FormGroup({
   search: new FormControl(""),
   sortBy: new FormControl(""),
   priceMin:new FormControl(0),
   priceMax: new FormControl(0),
   onSale: new FormControl(""),
   inStock: new FormControl(""),
  })

  likedItems:number[] = []
  addItem:IcartProd = this.cartItemsService.addItem
  cartList:IcartProd[] = []
  visible:boolean = false
  user: object = {}
  show:boolean = false
 
   
  constructor(
    private productListService:ProductListService,
    private cartItemsService:CartItemsService,
    private activatedRoute: ActivatedRoute , 
    private router: Router,
    private http: HttpClient,
    private authService:LoginService){
    window.scroll(0,0)

  }
 

  ngOnInit(): void {
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
      this.likedItems.some(x => {
        if(x === el.id) el.Liked = true}
        )
    })
   }
  })

    let searchValue = this.productListService.search
    this.fillterForm.controls['search'].setValue(this.productListService.search)
    
   this.products.map(el => {
      if(el.discount){
        el.newPrice = (el.price - (el.price * el.discount / 100))
      }
    })
  }


  
 //sort items part
  search(){
    let itemName: any = this.fillterForm.value.search
    this.products = this.productListService.products.filter(item =>
      item.name.toLowerCase().includes(itemName.toLowerCase())
    )

    if(this.fillterForm.value.sortBy === "by price" ){
     this.sortByPrice()
    }
    if(this.fillterForm.value.sortBy === "by discount"){
      this.sortByDiscount()
    }
    const filter = this.fillterForm.value
    this.http.post(this.productListService.address,filter)//refresh template
    console.log(filter)
    this.fillterForm.reset() //if connect with back, delete this func
  }

  sortByPrice(){
  this.products.sort((x,y)=> {
    // let minPrice = this.fillterForm.value?.priceMin
    // let maxPrice =  this.fillterForm.value?.priceMax
    return x.price - y.price
  })
  }

  sortByDiscount(){
    this.products.sort((x,y)=> {return x.discount - y.discount})
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

    
  goTo(selectedItem:any){
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
