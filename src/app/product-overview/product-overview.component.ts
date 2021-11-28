import { PokemonService } from './../services/pokemon.service';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Product } from './../model/Product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  elevation: string = 'mat-elevation-z8'

  id: string;

  product: Product = new Product(0,'','',0,0,[],0,[],{},[],[])
  color:string = '0,0,0'
  panelOpenState: boolean = false

  constructor(
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private pokemonService: PokemonService
  ) { 
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    console.log(this.route)
        
  }

  ngOnInit(): void {
    this.setProduct(this.id)
    this.getSpecies(this.id)
    
  }

  addItemToCart(){
    this.shoppingCartService.addCart(this.product)
    console.log(this.product)
  }

  getPokemon(){
    this.pokemonService.getPokemon(this.id.toString())
  }

  private setProduct(name: string){
    this.pokemonService.getPokemon(name).subscribe((value:any) => {
      this.product = new Product(
      value.id,
      value.name,
      value.sprites.other['official-artwork'].front_default,
      value.height,
      value.weight,
      value.abilities,
      value.base_experience,
      value.moves,
      value.species,
      value.stats,
      value.types
      )
      }
    )
  }

  getTypes():pokemonTypes[]{
    return this.product.types
  }

  getSpecies(name: string){
    this.pokemonService.getSpecies(name).subscribe(
      (value:any) => {
        console.log(value)
      }
    )
    
  }



}

export interface pokemonTypes{
  slot: number, 
  type: {name:string,url:string}

}