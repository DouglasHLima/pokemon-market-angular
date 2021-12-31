
import { SharedModule } from './../shared/shared.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCartComponent } from './item-cart/item-cart.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    ItemCartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
