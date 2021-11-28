

import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { PokemonConfig } from 'src/app/model/PokemonConfig';

import { Pokemon } from '../../model/Pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Product } from 'src/app/model/Product';
import { Subscriber, Observable } from 'rxjs';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('pokemon') pokemonConfig: PokemonConfig = {name:'',url:''}
  @Output('description') onClickCard: EventEmitter<string> = new EventEmitter()

  centered = false;
  disabled = false;
  unbounded = false;

  
  color: string = 'rgba(0, 0, 0, 0.2)'
  

  product: Product = new Product(0,'','',0,0,[],0,[],{},[],[])

  pokemon: Pokemon = {name:'',number:0,image:'',height:0,weight:0,abilities:[],base_experience:0,moves:[],species:[],stats:[],types:[]}

  

  panelOpenState = false;

  constructor(
    private pokemonService:PokemonService,
    private shoppingCartService: ShoppingCartService,
    ) { 
      
    }

  ngOnInit(): void {

 
    this.setProduct(this.pokemonConfig.name)

    
  }
  addItemToCard(){
    console.log(this.product)
    this.shoppingCartService.addCart(this.product)
    
  }

  log(){
    console.log('clicou')
  }

  goToDescription(){
    this.onClickCard.emit(this.product.name)
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

}
