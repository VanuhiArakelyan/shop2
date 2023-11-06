import { Component,OnInit ,OnDestroy} from '@angular/core';

import { MainService } from '../../services/main.service';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { IshopProd, IcartProd  } from '../../Interface/product-description';
import { LoginService } from 'src/app/services/loginService.service';
import { ProductListService } from 'src/app/services/product-list.service';


@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit{
  cartList:IcartProd[] = []
  total:number = 0
  orders = this.cartItemsService.orders
  user = {}
  products = this.productListService.products
  addItem:IcartProd = this.cartItemsService.addItem
constructor(
  private mainService:MainService,
  private cartItemsService:CartItemsService,
  private authService:LoginService,
  private productListService: ProductListService,
  ){

    window.scroll(0,0)
}
ngOnInit(): void {
this.cartItemsService.getCardList()
this.cartList = this.cartItemsService.cartList
this.total = this.cartItemsService.total
}

ngOnDestroy(){
  localStorage.removeItem('cards')
  localStorage.removeItem('liked')
}

}
