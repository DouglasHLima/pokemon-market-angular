import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


import { AllPokemonsConfig } from '../models/all-pokemons-config.model';
import { Pokemon } from '../models/pokemon.model';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private readonly POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/'
  private readonly POKEMON_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/'

  


  constructor(private httpClient: HttpClient) { 
    
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


  getSpecies(name: string):Observable<any>{
    return this.httpClient.get(this.POKEMON_SPECIES+name)
  }

}
