import { Pokemon } from './../model/Pokemon';

export class Product implements Pokemon {
    
    private price: number = 0

    number: number;
    name: string;
    image: string;
    height: number;
    weight: number;
    abilities;
    base_experience: number;
    moves;
    species: {};
    stats;
    types;

    
    constructor(
        number: number,
        name:string ,
        image: string,
        height: number,
        weight: number,
        abilities: [],
        base_experience: number,
        moves:[],
        species: {},
        stats:[],
        types:[],
        ){
        this.number = number;
        this.name = name;
        this.image = image;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.base_experience = base_experience;
        this.moves = moves;
        this.species = species;
        this.stats = stats;
        this.types = types
        this.setPrice()
    }

    

    private setPrice(){
        this.price = this.weight * (this.height*0,11)
    }

    getPrice(){
        return this.price
    }
}
