import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './services/loginService.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: LoginService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authToken = JSON.parse(localStorage.getItem("user") || '{}').token as any


    const authReq = req.clone({
        headers: req.headers.set("Authorization", authToken || '')
    })

    return next.handle(authReq)
      .pipe(
        tap((event: any) => {
          if (event instanceof Response) {
            console.log(event.status)
          }
        }, (error: any) => {
          console.log(error.status);
          if (error.status === 404) {
            this.router.navigateByUrl('/error')
          }
        }
        )
      );


  }
}
