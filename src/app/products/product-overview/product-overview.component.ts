import { PokemonFull } from './../models/pokemon.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Product } from '../models/product.model';
import { PokemonService } from '../services/pokemon.service';

import { PokemonSpecies, PokemonTypes } from '../models/pokemon.model';
import { ShoppingCartService } from 'src/app/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
})
export class ProductOverviewComponent implements OnInit {
  public elevation: string = 'mat-elevation-z8';
  public panelOpenState: boolean = false;

  private id: string;

  public product: Product = new Product(0, '', '', 0, 0);

  public pokemonSpecieStats: PokemonSpecies = {
    base_happiness: 0,
    capture_rate: 0,
    color: { name: '' },
    egg_groups: [{ name: '' }],
    flavor_text_entries: [{ flavor_text: '', language: { name: '' } }],
    habitat: { name: '' },
    shape: { name: '' },
    is_baby: false,
    is_legendary: false,
    is_mythical: false,
  };

  constructor(
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private pokemonService: PokemonService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.setProduct(this.id);
    this.getSpecies(this.id);
  }

  addItemToCart() {
    this.shoppingCartService.addCart(this.product);
  }

  getPokemon() {
    this.pokemonService.getPokemon(this.id.toString());
  }

  private setProduct(name: string) {
    this.pokemonService.getPokemon(name).subscribe((value: PokemonFull) => {
      this.product = new Product(
        value.id,
        value.name,
        this.pokemonService.getOfficialArtwork(value.id),
        value.height,
        value.weight,
      )
      
    });
  }

  getTypes(): PokemonTypes[] {
    return [] //this.product.types;
  }

  getSpecies(name: string) {
    this.pokemonService.getSpecies(name).subscribe((value: any) => {
      this.pokemonSpecieStats = value;
    });
  }
}