import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonConfig } from 'src/app/model/PokemonConfig';
import { Product } from 'src/app/model/Product';

import { PokemonService } from './../../services/pokemon.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  
  public color: string = 'rgba(0, 0, 0, 0.3)';
  public panelOpenState = false;

  @Input('pokemon') pokemonConfig: PokemonConfig = { name: '', url: '' };
  @Output('description') onClickCard: EventEmitter<string> = new EventEmitter();

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

  goToDescription() {
    this.onClickCard.emit(this.product.name);
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
