import { Pokemon } from './../model/pokemon';
import { Observable } from 'rxjs';
import { AllPokemonsConfig } from './../model/AllPokemonsConfig';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private readonly POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/'
  



  constructor(private httpClient: HttpClient) {  }

  getPokemonConfigs():Observable<AllPokemonsConfig>{
    return this.httpClient.get<AllPokemonsConfig>(this.POKEMON_API)
  }
  getPokemon(url:string):Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url)
  }
  getPokemonsWithRange(offset:number,limit: number){
    return this.httpClient.get<AllPokemonsConfig>(this.POKEMON_API+`?offset=${offset}&limit=${limit}`)
  }


}
