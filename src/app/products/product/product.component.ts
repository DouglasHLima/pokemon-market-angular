import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { PokemonService } from 'src/app/products/services/pokemon.service';
import { ShoppingCartService } from 'src/app/shopping-cart/services/shopping-cart.service';

import { PokemonConfig } from '../models/pokemon-config.model';

@Component({
  selector: 'pkm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public color: string = 'rgba(0, 0, 0, 0.3)';
  public panelOpenState = false;

  @Input('pokemon') pokemonConfig: PokemonConfig = { name: '', url: '' };
  @Output() cardClick: EventEmitter<string> = new EventEmitter();

  public product: Product = new Product(0, '', '', 0, 0, [], 0, [], []);

  constructor(
    private pokemonService: PokemonService,
    private shoppingCartService: ShoppingCartService
  ) {
    
  }

  ngOnInit(): void {
    this.setProduct(this.pokemonConfig.name);
  }

  addItemToCard() {
    console.log(this.product);
    this.shoppingCartService.addCart(this.product);
  }

  goToDescriptionPage() {
    this.cardClick.emit(this.product.name);
  }

  private setProduct(name: string) {
    this.pokemonService.getPokemon(name).subscribe((value: any) => {
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
      );
    });
  }

}
