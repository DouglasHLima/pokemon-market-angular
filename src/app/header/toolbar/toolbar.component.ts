import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart/services/shopping-cart.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  cartSize: number = 0;

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {}

  openCart() {
    this.router.navigate(['/cart']);
  }
  openHome() {
    this.router.navigate(['']);
  }

  getCartSize(): number {
    return this.shoppingCartService.getCartSize();
  }
}
