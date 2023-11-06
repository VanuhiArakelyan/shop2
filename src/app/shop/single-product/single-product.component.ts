import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ProductListService } from '../../services/product-list.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { IshopProd, IcartProd, IReview } from '../../Interface/product-description'



@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  constructor(
    private productListService: ProductListService,
    private cartItemsService: CartItemsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder) {


    this.selectedItem = this.productListService.selectedItem as IshopProd
    this.similarItems = this.selectedItem.SimilarItems
    this.images = this.selectedItem.imageUrl

    if (this.selectedItem.discount) {
      this.selectedItem.newPrice = (this.selectedItem.price - (this.selectedItem.price * this.selectedItem.discount / 100))
      console.log(this.selectedItem.newPrice)
    }

    this.similarItems?.map(el => {
      if(el.discount){
        el.newPrice = (el.price - (el.price * el.discount / 100))
      }
    }) // error from this part

    this.likedItems = JSON.parse(localStorage.getItem('liked') || '[]')
    this.similarItems?.find(el => {
      this.likedItems.find(x => {
        if (x === el.id) el.Liked = true
      }
      )
    })

  }

  tab: number = 0;

  newReview = new FormGroup({
    text: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    agree: new FormControl("", Validators.required),
    stars: new FormControl(0, Validators.min(1)),
    date: new FormControl({})
  });

  reviews:boolean = false
  submited: boolean = false;
  add: boolean = false;
  products = this.productListService.products
  addItem: IcartProd = {
    id: 0,
    name: "",
    price: 0,
    imageUrl: [],
    discount: 0,
    newPrice: 0,
    aditionalText: '',
    color: "",
    num: 0
  }

  cartList: IcartProd[] = []
  selectedItem: IshopProd = {
    id: 0,
    name: "",
    price: 0,
    slideImg:"",
    imageUrl: [],
    discount: 0,
    newPrice: 0,
    aditionalText: "",
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
    SimilarItems: [],
    quantity: 0,
    num:0
  }
  images: string[]
  similarItems: IshopProd[]
  image: string | undefined = this.selectedItem.imageUrl[0]
  review: number | undefined = this.selectedItem.Reviews.length
  likedItems: number[] = []
  quantity: number = 0
  stars: number[] = [1, 2, 3, 4, 5];

  selectedValue: number = 0;
  //star: any = 0
  isMouseover: boolean = true;
  viewMore: boolean = true




  ngOnInit(): void {
    this.image = this.selectedItem?.imageUrl[0]
  }


  decriment(item: any) {
    if (this.quantity > 0) this.quantity -= 1
    this.addItem.num = this.quantity
    console.log(this.quantity)
  }
  increment(item: any) {
    this.quantity += 1
    this.addItem.num = this.quantity
    console.log(this.quantity)
  }


  addToCart(product: IshopProd) {
    if (this.addItem.num > 0) {
      this.add = true;
      this.addItem.id = product.id
      this.addItem.name = product.name
      this.addItem.aditionalText = product.aditionalText
      this.addItem.color = product.AditionalInformation.colours
      this.addItem.discount = product.discount
      this.addItem.newPrice = product.newPrice
      this.addItem.price = product.price
      this.addItem.imageUrl = product.imageUrl
      this.cartItemsService.addItem = this.addItem
      this.cartItemsService.setCardList(this.cartItemsService.addItem)
      this.cartList = this.cartItemsService.cartList
      console.log(this.cartList)
    }
  }


  addReview(selectedItem: IshopProd) {
    this.submited = true
    if (this.newReview.status === 'INVALID') return;
    else {
      const data: any = new Date()
      const today = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const reviewDay = data.toLocaleString('en-IN', today)

      console.log(reviewDay);
      this.newReview.patchValue({
        date: reviewDay
      });
      let newReview: any = this.newReview.value
      this.selectedItem.Reviews.push(newReview)
      this.http.post(this.productListService.address, selectedItem)

      console.log(selectedItem);
    }
  }


  //stars part
  reviewStars(star:number) {
    this.selectedValue = star
  }
  countStar(star: number) {
    this.isMouseover = false;
    console.log(star)
  }
  

  roundStars(){
    let sum = this.selectedItem.Reviews.reduce((sum, el) => sum += el.stars, 0)
     return sum /  this.selectedItem.Reviews.length
   }
 
  

  addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
      this.newReview.patchValue({
        stars: this.selectedValue
      });
    }
  }
  removeClass(star: any) {
    if (this.isMouseover) {
      this.selectedValue = 0;
      // this.newReview.patchValue({
      //   stars: star
      // });
    }
  }


  //similar items liked, view, and add to cart part
  goTo(selectedItem: any) {
    this.productListService.goTo(selectedItem)
    this.selectedItem = this.productListService.selectedItem as IshopProd
    this.router.navigateByUrl("singleProduct/" + this.selectedItem.id)
    window.scroll(0, 0)
  };


  addLike(product: IshopProd) {
    product.Liked = !product.Liked
    this.productListService.setLikedList(product)
    this.likedItems = this.productListService.likedItems
    console.log(this.likedItems)

  }
  addToBacket(product: IshopProd) {
    if (product.quantity > 0) {
      this.addItem.id = product.id
      this.addItem.name = product.name
      this.addItem.aditionalText = product.aditionalText
      this.addItem.color = product.AditionalInformation.colours
      this.addItem.discount = product.discount
      this.addItem.newPrice = product.newPrice
      this.addItem.price = product.price
      this.addItem.imageUrl = product.imageUrl
      this.addItem.num = 1
      this.cartItemsService.addItem = this.addItem
      this.cartItemsService.setCardList(this.addItem)
      this.cartList = this.cartItemsService.cartList
      console.log(this.cartList)
    }
  }
}
