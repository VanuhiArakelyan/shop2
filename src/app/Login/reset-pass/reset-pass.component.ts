import { Component , OnInit} from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LoginService } from 'src/app/services/loginService.service';



@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
constructor( 
  private authorization: LoginService,
  private Router: Router,
  private http: HttpClient) {} 

  email =  new FormControl('',[Validators.required, Validators.email]);

ngOnInit(): void {
  
}
resetPass(){
  this.http.post(this.authorization.address, this.email.value)
  console.log(this.email.value)
  this.email.reset()

}
}
