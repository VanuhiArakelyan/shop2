import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop/shop.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { LoginComponent } from './Login/login/login.component';
import { ResetPassComponent } from './Login/reset-pass/reset-pass.component';
import { ContactUsComponent } from './shop-info/contact-us/contact-us.component';
import { CardComponent } from './user/card/card.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './shop-info/error/error.component';
import { PolicyComponent } from './shop-info/policy/policy.component';
import { AboutUsComponent } from './shop-info/about-us/about-us.component';
import { BlogComponent } from './shop/blog/blog.component';
import { ImageSrcDirective } from './shop/image-src.directive';
import { BlogsItemComponent } from './shop/blogs-item/blogs-item.component';
import { ViewOrderComponent } from './user/view-order/view-order.component';
import { AccountComponent } from './user/account/account.component';
import { AccountDetailsComponent } from './user/account/account-details/account-details.component';
import { AuthInterceptor } from './auth.interceptor';
import { CheckoutComponent } from './user/checkout/checkout.component';





@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    SingleProductComponent,
    LoginComponent,
    ResetPassComponent,
    ContactUsComponent,
    ImageSrcDirective,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    PolicyComponent,
    AboutUsComponent,
    BlogComponent,
    BlogsItemComponent,
    ViewOrderComponent,
    AccountComponent,
    AccountDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
