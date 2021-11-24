import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { PokemonConfig } from '../model/pokemon-config';
import { PokemonService } from '../services/pokemon.service';
import { AllPokemonsConfig } from './../model/AllPokemonsConfig';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pokemons: PokemonConfig[] = []
  pageConfig: AllPokemonsConfig = {count:0,next:'',previous:'',results:[]}
  offset: number = 0
  limit: number = 10


  constructor(public pokemonService: PokemonService) { 
    
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

}
