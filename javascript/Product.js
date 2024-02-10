export default class Product{
    
    constructor(name, price, description, imageLink){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageLink = imageLink;
    }

    get getName(){
        return this.name;
    }
    get getprice(){
        return this.price;
    }
    get getDescription(){
        return this.description;
    }
    get getImage(){
        return this.imageLink;
    }
}