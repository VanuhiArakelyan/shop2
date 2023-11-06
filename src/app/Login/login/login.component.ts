import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LoginService } from 'src/app/services/loginService.service';
import { ProductListService } from 'src/app/services/product-list.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { IcartProd, IshopProd } from 'src/app/Interface/product-description';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginTab: number = 1
  remember: boolean = false;
  login: boolean = false;
  register: boolean = false
  userInfo = {}

  signInForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  registerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    displayName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.required, Validators.maxLength(8)]),
    confirmPass: new FormControl("", [Validators.required, Validators.maxLength(8)]),
    agree: new FormControl("", [Validators.required]),
  });


  constructor(
    public router: Router,
    private ActivatedRoute: ActivatedRoute,
    private authService: LoginService,
    private productListService: ProductListService,
    private cartItemsService: CartItemsService,
    private http: HttpClient) {

     this.authService.users.find(el => {
      let userInfo = JSON.parse(localStorage.getItem("user") || '{}')
      if (userInfo.id === el.id) {
      this.cartItemsService.getCardList().find(el => userInfo.bagItems.push(el.id))
      this.productListService.getLikedList().find(el => userInfo.likedItems.push(el))
      }
    })
  }

  ngOnInit(): void {
   window.scroll(0,0)
  }

  signIn() {
    this.login = !this.login
    if (this.signInForm.status === 'INVALID') return;
    console.log(this.signInForm.value)
    this.authService.login(this.signInForm.value).subscribe(res => {
      let user = this.authService.users.find( el => el.username === this.signInForm.value.username)
        let userInfo = {
          id: user?.id,
          username: user?.username,
          token: res,
          likedItems: user?.likedItems,
          bagItems: user?.bagItems,
          orders: user?.orders,
          billingAddress: user?.billingAddress,
          shippingAddress: user?.shippingAddress,
        }
        localStorage.setItem("user", JSON.stringify(userInfo))
        this.userInfo = userInfo
        this.authService.subject.next('')
     
      this.router.navigateByUrl('/home')
     
    } ,(error)=>{console.log(error)}
  
    )

  }



   createAccount() {
    this.register = !this.register
    if (this.registerForm.status === 'INVALID') return;
    if (this.registerForm.value.password === this.registerForm.value.confirmPass && this.registerForm.value.agree) {
      let newUser = this.registerForm.value
      this.http.post(this.authService.address, newUser)
      let userInfo = {
        id: 1,
        username: newUser.displayName,
        token: "125433347262",
        likedItems: this.productListService.getLikedList(),
        bagItems: this.cartItemsService.getCardList(),
        orders: [],
        billingAddress: {},
        shippingAddress: {},
      }
      localStorage.setItem("user", JSON.stringify(userInfo))
      this.userInfo = userInfo
      this.authService.subject.next('')
      this.authService.registUsers.push(newUser)
      console.log(this.registerForm.value)
      this.router.navigateByUrl("/home")

    }
  }
}