import { NamedApiResource } from './../models/pokemon.model';
import { AllPokemonsConfig } from './../models/all-pokemons-config.model';
import { mergeMap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';


import { PokemonService } from './pokemon.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product = new Product(0,'','',0,0)
  products: Product[] = []
  productsListChange: Subject<Product[]> = new Subject()
  productsPageConfig: Subject<AllPokemonsConfig> = new Subject

  constructor(
    private pokemonService: PokemonService,

    ) { }


    setproducts(offset: number, limit: number){
      this.products = []
      this.pokemonService.getPokemonsWithRange(offset, limit)
      .pipe(
        mergeMap( (value:AllPokemonsConfig) => {
          this.productsPageConfig.next(value)
          return value.results
        }),
        mergeMap( (value:NamedApiResource) => this.pokemonService.getPokemon(value.name))
      )
      .pipe(
        take(limit)
      )
      .subscribe(value => {
        const product = new Product(
          value.id,
          value.name,
          this.pokemonService.getOfficialArtwork(value.id),
          value.height,
          value.weight
          )
        this.products.push(product)
        this.productsListChange.next( this.products.sort((a,b) => a.number - b.number) )
      })
    }


}
