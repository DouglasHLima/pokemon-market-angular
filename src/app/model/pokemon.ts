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

//  {
//     abilities[{name},{}]
//     base_experience: number,
//     height: number,
//     id:number,
//     moves:[{move:{name,url}}],
//     name: string,
//     species{name,url}
//     stats[{base_stat:number,stat.name}]
//     types[{type.name}]
//     weight:number

//  }

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
