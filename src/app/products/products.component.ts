import { ShoppingCartService } from 'src/app/shopping-cart/services/shopping-cart.service';
import { Product } from './models/product.model';

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AllPokemonsConfig } from './models/all-pokemons-config.model';
import { PokemonConfig } from './models/pokemon-config.model';


import { PokemonService } from './services/pokemon.service';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private pokemons: PokemonConfig[] = []

  public pageConfig: AllPokemonsConfig = {count:0,next:'',previous:'',results:[{name:'', url:''}]}
  public offset: number = 0
  public limit: number = 10


  constructor(
    private pokemonService: PokemonService,
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    ) { 
    
  }

  ngOnInit(): void {
    this.getPaginationRange(this.offset,this.limit)
  }

  getPokemonsList(){
    this.pokemons = this.pageConfig.results
    
    return this.pokemons
  }

  getPaginationRange(offset:number,limit:number){
    this.pokemonService.getPokemonsWithRange(offset,limit).subscribe(
      value => this.pageConfig = value
    )
  }

  setPages(event: PageEvent){
    let offset = event.pageIndex * event.pageSize;
    this.getPaginationRange(offset,event.pageSize)
  }

  onCardClick(id: string){
    console.log(id)
    this.router.navigate(['product-overview',id])
  }

  onAddToCartClick(product: Product){
    this.shoppingCartService.addCart(product)
  }

}
