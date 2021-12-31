export interface Pokemon {
     number: number;
     name: string;
     image: string;
     height: number;
     weight: number;
     abilities:[]
     base_experience:number
     moves: []
     species:{}
     stats:[]
     types:[]
}

export interface PokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: { name: string };
    egg_groups: [{ name: string }];
    flavor_text_entries: [{ flavor_text: string; language: { name: string } }];
    habitat: { name: string };
    shape: { name: string };
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
}
  
  export interface PokemonTypes {
    slot: number;
    type: { name: string; url: string };

}
  