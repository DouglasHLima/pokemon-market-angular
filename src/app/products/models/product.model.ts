
export class Product {
    
    private price: number = 0

    number: number;
    name: string;
    image: string;
    height: number;
    weight: number;
    
    constructor(
        number: number,
        name:string ,
        image: string,
        height: number,
        weight: number,

        ){
        this.number = number;
        this.name = name;
        this.image = image;
        this.height = height;
        this.weight = weight;
        this.setPrice()
    }

    private setPrice(){
        this.price = this.weight * (this.height*0,11)
    }

    getPrice(){
        return this.price
    }
}
