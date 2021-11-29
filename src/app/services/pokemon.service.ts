import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from '../model/pokemon';
import { AllPokemonsConfig } from './../model/AllPokemonsConfig';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private readonly POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/'
  private readonly POKEMON_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/'

  
  private pageConfig: Observable<AllPokemonsConfig>

  constructor(private httpClient: HttpClient) { 
    this.pageConfig = this.getPokemonConfigs()
   }

  getPokemonConfigs():Observable<AllPokemonsConfig>{
    return this.httpClient.get<AllPokemonsConfig>(this.POKEMON_API)
  }
  getPokemon(name: string):Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.POKEMON_API+name)
  }

  getPokemonsWithRange(offset:number,limit: number){
    return this.httpClient.get<AllPokemonsConfig>(this.POKEMON_API+`?offset=${offset}&limit=${limit}`)
  }

  getPageConfig(){
    return this.pageConfig
  }

  getSpecies(name: string){
    return this.httpClient.get(this.POKEMON_SPECIES+name)
  }

}
