import { ShoppingCartService } from './../../services/shopping-cart.service';
import { ShoppingCartComponent } from './../../shopping-cart/shopping-cart.component';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  cartSize: number = 0

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    ) { }

  ngOnInit(): void {
  }

  openCart(){
    this.router.navigate(['/cart'])
  }
  openHome(){
    this.router.navigate([''])
  }

  getCartSize():number {
    return this.shoppingCartService.getCartSize()
  }

}
