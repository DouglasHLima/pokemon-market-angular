import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';

import { ShoppingCartItem } from 'src/app/shopping-cart/models/shoppingCartIem.model';



@Component({
  selector: 'item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {
  public panelOpenState:Boolean = false;
  public cardStyle: string;

  @Input() quantity = 1;

  @Input() product: Product = new Product(0,'','',0,0);

  @Input() itemCart: ShoppingCartItem = {product: new Product(0,'','',0,0),quantity: 0};
  
  @Output() modifyItemQuantity = new EventEmitter();
  @Output() excludeItem = new EventEmitter();


  constructor(
  ) { 
    this.cardStyle = `background-image: url(${this.product.image};)`;
  }



  ngOnInit(): void {
    this.product = this.itemCart.product;
    this.cardStyle = `background-image: url(${this.product.image});`;
  }

  onSubtractItem(){
    this.itemCart.quantity -= 1;
    this.modifyItemQuantity.emit(this.itemCart);

  }

  onAddItem(){
    this.itemCart.quantity += 1;
    this.modifyItemQuantity.emit(this.itemCart);
  }

  onRemoveItem(){
    this.excludeItem.emit(this.itemCart);
  }
  
}
