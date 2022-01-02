import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';

@Component({
  selector: 'pkm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public color: string = 'rgba(0, 0, 0, 0.3)';
  public panelOpenState = false;
  mouseOn = true

  @Input() product: Product = new Product(0,'','',0,0)
  @Output() cardClick: EventEmitter<string> = new EventEmitter();
  @Output() addCart: EventEmitter<Product> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  addItemToCard() {
    this.addCart.emit(this.product)
  }

  goToDescriptionPage() {
    this.cardClick.emit(this.product.name);
  }
  changeElevation(){
    this.mouseOn = !this.mouseOn
  }
}
