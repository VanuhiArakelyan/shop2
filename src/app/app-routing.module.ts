import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from './shop/shop/shop.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { LoginComponent } from './Login/login/login.component';
import { ResetPassComponent } from './Login/reset-pass/reset-pass.component';
import { ContactUsComponent } from './shop-info/contact-us/contact-us.component';
import { CardComponent } from './user/card/card.component';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './shop-info/error/error.component';
import { PolicyComponent } from './shop-info/policy/policy.component';
import { AboutUsComponent } from './shop-info/about-us/about-us.component';
import { BlogComponent } from './shop/blog/blog.component';
import { BlogsItemComponent } from './shop/blogs-item/blogs-item.component';
import { ViewOrderComponent } from './user/view-order/view-order.component';
import { AccountComponent } from './user/account/account.component';
import { AccountDetailsComponent } from './user/account/account-details/account-details.component';
import { CheckoutComponent } from './user/checkout/checkout.component';






const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "shop", component: ShopComponent },
  { path: "singleProduct/:id", component: SingleProductComponent },
  { path: "singleProduct", component: SingleProductComponent },
  { path: "login", component: LoginComponent },
  { path: "reset", component: ResetPassComponent },
  { path: "contact_us", component: ContactUsComponent },
  { path: "myaccount/:param", component: AccountComponent },
  { path: "myaccount", component: AccountComponent },
  { path: "card", component: CardComponent },
  { path: 'checkout', component : CheckoutComponent},
  { path: "order-details", component: ViewOrderComponent },
  { path: "account-details", component: AccountDetailsComponent },
  { path: "policy", component: PolicyComponent },
  { path: "aboutUs", component: AboutUsComponent },
  { path: "blog", component: BlogComponent },
  { path: "blogsItem/:id",component:BlogsItemComponent},
  { path: "blogsItem", component: BlogsItemComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
