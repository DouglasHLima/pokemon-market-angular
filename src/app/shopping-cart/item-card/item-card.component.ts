import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

import { ShoppingCartItem } from 'src/app/models/shoppingCartIem.model';



@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  public panelOpenState:Boolean = false;
  public cardStyle: string;

  @Input() quantity = 1;

  @Input() product: Product = new Product(0,'','',0,0,[],0,[],[]);

  @Input() itemCart: ShoppingCartItem = {product: new Product(0,'','',0,0,[],0,[],[]),quantity: 0};
  
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
