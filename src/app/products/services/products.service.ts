import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product = new Product(0,'','',0,0,[],0,[],[])

  constructor(
    private pokemonService: PokemonService,

    ) { }

    setProduct(name: string){
      this.pokemonService.getPokemon(name).subscribe((value:any) => {
        this.product = new Product(
        value.id,
        value.name,
        value.sprites.other['official-artwork'].front_default,
        value.height,
        value.weight,
        value.moves,
        value.species,
        value.stats,
        value.types
        )
        }
      )
    }


}
