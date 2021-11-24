 export interface Pokemon {
     number: number;
     name: string;
     image: string;
 }


// abilities: (3) [{…}, {…}, {…}]
// base_experience: 172
// forms: [{…}]
// game_indices: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// height: 12
// held_items: []
// id: 101
// is_default: true
// location_area_encounters: "https://pokeapi.co/api/v2/pokemon/101/encounters"
// moves: (62) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "electrode"
// order: 150
// past_types: []
// species: {name: 'electrode', url: 'https://pokeapi.co/api/v2/pokemon-species/101/'}
// sprites: {back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/101.png', back_female: null, back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/101.png', back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png', …}
// stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// types: [{…}]
// weight: 666



 export function getImage(id: number): string {
     return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${getNumber(id)}.png`
 }
 export function getNumber(id: number): string {
     return leadingZero(id);
 }

 function leadingZero(str: string | number, size: number = 3): string {
     let s = String(str);
     while(s.length < (size || 2)){
         s='0' + s;
     }

     return s;
}
