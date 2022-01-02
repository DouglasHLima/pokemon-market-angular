


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

export interface PokemonFull {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities?: (AbilitiesEntity)[] | null;
  forms?: (NamedApiResource)[] | null;
  game_indices?: (GameIndicesEntity)[] | null;
  held_items?: (HeldItemsEntity)[] | null;
  location_area_encounters: string;
  moves: MovesEntity[];
  species: NamedApiResource;
  sprites: Sprites;
  stats?: (StatsEntity)[] | null;
  types?: (TypesEntity)[] | null;
  past_types?: (PastTypesEntity)[] | null;
}
export interface AbilitiesEntity {
  is_hidden: boolean;
  slot: number;
  ability: NamedApiResource;
}
export interface NamedApiResource {
  name: string;
  url: string;
}
export interface GameIndicesEntity {
  game_index: number;
  version: NamedApiResource;
}
export interface HeldItemsEntity {
  item: NamedApiResource;
  version_details?: (VersionDetailsEntity)[] | null;
}
export interface VersionDetailsEntity {
  rarity: number;
  version: NamedApiResource;
}
export interface MovesEntity {
  move: NamedApiResource;
  version_group_details?: (VersionGroupDetailsEntity)[] | null;
}
export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  version_group: NamedApiResource;
  move_learn_method: NamedApiResource;
}
export interface Sprites {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
  other: Other;
  versions: Versions;
}
export interface Other {
  dream_world: DreamWorldOrIcons;
  home: Home;
  official_artwork: OfficialArtwork;
}
export interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}
export interface Home {
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
}
export interface OfficialArtwork {
  front_default: string;
}
export interface Versions {
  generation_i: Generation_i;
  generation_ii: Generation_ii;
  generation_iii: Generation_iii;
  generation_iv: Generation_iv;
  generation_v: Generation_v;
  generation_vi: Generation_vi;
  generation_vii: Generation_vii;
  generation_viii: Generation_viii;
}
export interface Generation_i {
  red_blue: Red_blueOrYellow;
  yellow: Red_blueOrYellow;
}
export interface Red_blueOrYellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}
export interface Generation_ii {
  crystal: GenerationSprites;
  gold: GenerationSprites;
  silver: GenerationSprites;
}
export interface GenerationSprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}
export interface Generation_iii {
  emerald: Emerald;
  firered_leafgreen: GenerationSprites;
  ruby_sapphire: GenerationSprites;
}
export interface Emerald {
  front_default: string;
  front_shiny: string;
}
export interface Generation_iv {
  diamond_pearl: OthersSprites;
  heartgold_soulsilver: OthersSprites;
  platinum: OthersSprites;
}
export interface OthersSprites {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
}
export interface Generation_v {
  black_white: Black_white;
}
export interface Black_white {
  animated: OthersSprites;
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
}
export interface Generation_vi {
  omegaruby_alphasapphire: Home;
  x_y: Home;
}
export interface Generation_vii {
  icons: DreamWorldOrIcons;
  ultra_sun_ultra_moon: Home;
}
export interface Generation_viii {
  icons: DreamWorldOrIcons;
}
export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: NamedApiResource;
}
export interface TypesEntity {
  slot: number;
  type: NamedApiResource;
}
export interface PastTypesEntity {
  generation: NamedApiResource;
  types?: (TypesEntity)[] | null;
}


  