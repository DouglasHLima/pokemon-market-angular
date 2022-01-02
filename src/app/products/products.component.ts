import { ProductsService } from './services/products.service';
import { ShoppingCartService } from 'src/app/shopping-cart/services/shopping-cart.service';
import { Product } from './models/product.model';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AllPokemonsConfig } from './models/all-pokemons-config.model';


import { Subscription } from 'rxjs';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {


  
  public pageConfig: AllPokemonsConfig = {count:0,next:'',previous:'',results:[{name:'', url:''}]}
  public offset: number = 0
  public limit: number = 10

  products: Product[] = []
  pageConfigSubscriber: Subscription;
  productsSubscriber: Subscription;


  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private productService: ProductsService
  )
  { 
    this.productsSubscriber = this.productService.productsListChange.subscribe(
      (value) => {
        this.products = value
      }
    )
    this.pageConfigSubscriber = this.productService.productsPageConfig.subscribe(
      (value) => {
        this.pageConfig = value
      }
    )
  }


  ngOnInit(): void {
    this.setProducts(this.offset,this.limit)
    
  }

  ngOnDestroy(): void {
    this.pageConfigSubscriber.unsubscribe()
    this.productsSubscriber.unsubscribe()
  }

  setProducts(offset:number,limit:number){

    this.productService.setproducts(offset,limit)
    
  }

  setPages(event: PageEvent){
    let offset = event.pageIndex * event.pageSize;
    this.setProducts(offset,event.pageSize)
  }

  onCardClick(id: string){
    console.log(id)
    this.router.navigate(['product-overview',id])
  }

  onAddToCartClick(product: Product){
    this.shoppingCartService.addCart(product)
  }

}
