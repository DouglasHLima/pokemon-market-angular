import { Component, Input, OnInit } from '@angular/core';
import { getImage } from 'src/app/model/pokemon';
import { PokemonConfig } from 'src/app/model/pokemon-config';

import { Pokemon } from './../../model/pokemon';
import { PokemonService } from './../../services/pokemon.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('pokemon') pokemonConfig: PokemonConfig = {name:'',url:''}
  
  pokemon:Pokemon = {name:'',image:'',number:0}

   getImage = getImage



  panelOpenState = false;

  constructor(private pokemonService:PokemonService) { 
   
    }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonConfig.url).subscribe((value:any) => {
      console.log(value)
      this.pokemon = {
        name: value.name,
        number: value.id,
        image: getImage(value.id)
      }  })
    }

}
