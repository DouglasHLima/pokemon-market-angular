import { Observable } from 'rxjs';
import { ShoppingCartService, ShoppingCartItem } from './../services/shopping-cart.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{



  cart: ShoppingCartItem[] = []
  total: number = 0

  constructor(private shoppingCart: ShoppingCartService) {
   
  }




  ngOnInit(): void {
    this.cart = this.shoppingCart.getShoppingCart()
    this.total = this.shoppingCart.getTotal()
    
  }

  

  modifyItemQuantity(event: any){
    console.log(event)
    this.shoppingCart.modifyQuantity(event)
    this.total = this.shoppingCart.getTotal()
  }

  excludeItem(event: any){
    this.shoppingCart.excludeItem(event)
    this.cart = this.shoppingCart.getShoppingCart()
    this.total = this.shoppingCart.getTotal()
  }

}
