import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MainService } from '../../../services/main.service';
import { LoginService } from 'src/app/services/loginService.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  submeted = false
  save:boolean = false
  prop = ""
  accountForm = new FormGroup({
    firstName: new FormControl( this.prop ? this.prop : "" , Validators.required),
    lastName: new FormControl( this.prop ? this.prop : "" , Validators.required),
    displayName: new FormControl( this.prop ? this.prop : ""  ,  Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    currentPass: new FormControl('',[Validators.required, Validators.maxLength(8)]),
    newPass: new FormControl('',[Validators.required, Validators.maxLength(8)]),
    confirmPass: new FormControl('',[Validators.required, Validators.maxLength(8)])
  })
  constructor(
    private mainService: MainService,
    private authService:LoginService,
    private http: HttpClient) { 

      this.authService.subject.subscribe(res=>{
        this.prop = JSON.parse(localStorage.getItem("user") || "{}").userName
      console.log()
      })
    }
    ngOnInit(): void {
    }
  saveChanges() {
    this.save = true
    if (this.accountForm.status === 'INVALID') return;
    let updateInfo = this.accountForm.value
    // this.http.post(this.authService.address,  updateInfo)
    // this.authService.users.find(el = > {
    //   if(el.username === updateInfo.displayName)
         
    // })
    // this.mainService.account.push(updateInfo)
    // console.log(this.mainService.account)
  }
  }
