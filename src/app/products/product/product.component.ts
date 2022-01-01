import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { take, tap } from 'rxjs/operators';

import { Product } from 'src/app/products/models/product.model';
import { PokemonService } from 'src/app/products/services/pokemon.service';

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
  @Output() addCart: EventEmitter<Product> = new EventEmitter();

  public product: Product = new Product(0, '', '', 0, 0, [], 0, [], []);

  constructor(
    private pokemonService: PokemonService,
  ) {
    
  }

  ngOnInit(): void {
    this.setProduct(this.pokemonConfig.name);
  }

  addItemToCard() {
    this.addCart.emit(this.product)
  }

  goToDescriptionPage() {
    this.cardClick.emit(this.product.name);
  }

  private setProduct(name: string) {
    this.pokemonService.getPokemon(name)
    .pipe(
      take(1)
    )
    .subscribe((value: any) => {
      this.product = new Product(
        value.id,
        value.name,
        this.pokemonService.getOfficialArtwork(value.id),
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
