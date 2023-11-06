import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MainService } from '../../services/main.service';
import { ProductListService } from 'src/app/services/product-list.service';
import { IshopProd, IcartProd } from '../../Interface/product-description';
import { LoginService } from 'src/app/services/loginService.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  activeTab = 'Dashboard'
  addresses = []
  add = 'noAdddres'
  orders = this.mainService.orders
  downloads = this.mainService.downloads
  loggedOut = false
  likedItems: number[] = []
  products: IshopProd[] = []
  username: string = ""
  user: {} = {
    id: 0,
    username:"",
    token: "",
    likedItems: [],
    bagItems: [],
    orders: [],
    billingAddress: {},
    shippingAddress: {},
  }

  constructor(
    private productListService: ProductListService,
    private mainService: MainService,
    private fb: FormBuilder, private reactiveFormsModule: ReactiveFormsModule,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService:LoginService) {
    
      this.authService.subject.subscribe(res=>{
        this.user = JSON.parse(localStorage.getItem("user") || "{}").username
        console.log(this.user)
        this.likedItems = JSON.parse(localStorage.getItem("user") || "{}").likedItems
        this.username = JSON.parse(localStorage.getItem("user") || "{}").username
    })
 
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      console.log(res)
      if (res['param'] ) {

        this.activeTab = res['param']
      }
    })

  if(this.likedItems){
    this.productListService.products.find(el => {
      this.likedItems.find(x => {
        if (x === el.id) {
          el.Liked = true
          this.products.push(el)
        }
      }
      )
    })
  }else{
    this.likedItems = this.productListService.getLikedList()
    this.productListService.products.find(el => {
      this.likedItems.find(x => {
        if (x === el.id) {
          el.Liked = true
          this.products.push(el)
        }
      }
      )
    })
  }
}
  onTabClick(tab: string) {
    this.activeTab = tab;
    console.log(tab);

  }
  addTab(prop: string) {
    this.add = prop
  }

  addAddressForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    companyName: new FormControl(''),
    country: new FormControl('', Validators.required),
    streetAddress: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })
  
  submit() {
    this.mainService.adresses.push(this.addAddressForm.value)
    let addressOne = [this.mainService.adresses]
    localStorage.setItem('address', JSON.stringify(addressOne))
    console.log(this.mainService.adresses);
    this.add = 'noAdddres'


  }
  logOut() {
    this.loggedOut = true
    localStorage.removeItem("user")
    this.router.navigateByUrl('/login')
  }

  removeItem(item: IshopProd) {
    this.likedItems.find(el => {
      if (el === item.id) {
        this.productListService.getLikedList().splice(this.likedItems.indexOf(el), 1)
        localStorage.setItem('liked', JSON.stringify(this.productListService.likedItems))
        this.likedItems = this.productListService.likedItems
        this.products.splice(this.likedItems.indexOf(el), 1)
      }
      console.log(this.likedItems)
    })
  }
}
