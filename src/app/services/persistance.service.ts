import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';
import { ShoppingCartItem } from '../models/shoppingCartIem.model';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {

  private readonly SHOPPING_CART: string = 'shopping_cart'

  constructor() { }

  async loadFromSessionStorage(): Promise<ShoppingCartItem[]>{
    let session = JSON.parse(sessionStorage.getItem(this.SHOPPING_CART) ?? "[]");
    let itemcart = session.map( (value: ShoppingCartItem) =>{
      return {
        product: new Product(
          value.product.number,
          value.product.name,
          value.product.image,
          value.product.height,
          value.product.weight,
          value.product.moves,
          value.product.species,
          value.product.stats,
          value.product.types
        ),
        quantity: value.quantity }
      }
    )
    return itemcart
  }

  addToSessionStorage(shoppingCartItem: ShoppingCartItem[]){  
    sessionStorage.setItem(this.SHOPPING_CART, JSON.stringify(shoppingCartItem));
  }
}
