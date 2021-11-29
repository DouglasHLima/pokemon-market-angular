import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PokemonConfig } from 'src/app/model/PokemonConfig';

import { PokemonService } from '../services/pokemon.service';
import { AllPokemonsConfig } from './../model/AllPokemonsConfig';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private pokemons: PokemonConfig[] = []

  public pageConfig: AllPokemonsConfig = {count:0,next:'',previous:'',results:[]}
  public offset: number = 0
  public limit: number = 10


  constructor(
    private pokemonService: PokemonService,
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

  openDescriptionPage(id: string){
    console.log(id)
    this.router.navigate(['product-overview',id])
  }

}
