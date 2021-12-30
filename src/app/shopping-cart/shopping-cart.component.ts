import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingCartItem } from '../models/shoppingCartIem.model';
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  form: FormGroup;

  cart: ShoppingCartItem[] = []
  total: number = 0

  constructor(
    private shoppingCart: ShoppingCartService,
    private formBuilder: FormBuilder
    ){
      this.form = this.formBuilder.group({
        zipCode: [null, [Validators.required, Validators.pattern("[0-9]{5}-[0-9]{3}")]],
      })

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

  onSubmit(){
    console.log(this.form)
  }

  getValidation(name:string){
    console.log(this.form)
    return !this.form.get(name)?.valid && this.form.get(name)?.touched
  }

  getErrorMessage(name:string){
    let form = this.form.get(name)
    if(form?.errors && !form?.dirty){
      return 'valor obrigatório'
    }
    return !form?.valid && !form?.hasError('required') ? `insira um valor válido!` : ''
  }

}
