import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  subject = new BehaviorSubject('')
  address = "https://fakestoreapi.com/"
  user = {}
  userIn = {
    username: "",
  }
  fakeUsers = 'https://fakestoreapi.com/users'
  users = [
    {
      id: 6,
      name: 'David',
      lastname: 'Russell',
      email: 'david_r@gmail.com',
      username: 'david_r',
      password: 'f238&@*$',
      likedItems: [1, 6],
      bagItems: [5, 4, 2],
      orders: [],
      billingAddress: {},
      shippingAddress: {},

    },
    {
      id: 8,
      name: 'william',
      lastname: 'hopkins',
      email: 'william@gmail.com',
      username: 'hopkins',
      password: 'William56$hj',
      likedItems: [5,6],
      bagItems: [1,5,2],
      orders: [],
      billingAddress: {},
      shippingAddress: {},
    },
    {
      id: 1,
      name: 'john',
      lastname: 'doe',
      email: 'john@gmail.com',
      username: 'johnd',
      password: 'm38rmF$',
      likedItems: [3, 6],
      bagItems: [1, 5],
      orders: [],
      billingAddress: {},
      shippingAddress: {},
    }
  ]
  registUsers:object[] = []

  constructor(private http: HttpClient, private router: Router) {
    if (this.isLogedIn()) {
      //STUGEL TOKEN KA TE CHE
    } else {
      this.router.navigateByUrl("/login")
    }
    console.log(this.registUsers)
  }


  login(user: object) {
    return this.http.post(this.address + 'auth/login', user)

  }
  register() {
    this.http.post(this.address, this.user)
  }
  isLogedIn() {
    //console.log(!!localStorage.getItem("user"))
    return !!localStorage.getItem("user")
  }
}
