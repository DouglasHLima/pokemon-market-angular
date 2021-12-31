import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { ShoppingCartItem } from '../models/shoppingCartIem.model';
import { PersistanceService } from './persistance.service';









@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {



  
  private shoppingCart: ShoppingCartItem[] = []
  private total: number = 0

  constructor(
    private persistanteService: PersistanceService
  ) { 
    this.persistanteService.loadFromSessionStorage().then(value => this.shoppingCart = value)
   }

  addCart(product: Product){
    if(!this.shoppingCart.find(p => p.product.number == product.number)){
      this.shoppingCart.push({product: product, quantity:1})
    }else{
      this.shoppingCart.forEach( p => {
        if(p.product.number == product.number){
         p.quantity += 1
        }
      })
    }
    this.persistanteService.addToSessionStorage(this.shoppingCart)
    console.log(this.shoppingCart)
  }

  removeFromCart(productId: number){
    this.shoppingCart.filter((product:ShoppingCartItem) => product.product.number !== productId)
    this.persistanteService.addToSessionStorage(this.shoppingCart)
  }

  getCartSize() {
    return this.shoppingCart.length
  }

  getShoppingCart(): ShoppingCartItem[]{
    return this.shoppingCart
  }

  modifyQuantity(productItem: ShoppingCartItem){
    this.shoppingCart.forEach(
      (product: ShoppingCartItem) => {
        if (product.product.number == productItem.product.number){
          product.quantity = productItem.quantity
          this.persistanteService.addToSessionStorage(this.shoppingCart)
        }
      }
    )
  }

  excludeItem(item: ShoppingCartItem){
    this.shoppingCart = this.shoppingCart.filter(i => i != item)
    console.log(this.shoppingCart)
    this.persistanteService.addToSessionStorage(this.shoppingCart)
  }

  getTotal(){
    this.total = this.shoppingCart.reduce((acc,curr)=>{
      return acc +(curr.product.getPrice()*curr.quantity) 
        },0)
    return this.total
  }

  
}
