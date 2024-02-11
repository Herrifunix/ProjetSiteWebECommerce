export class Product{
    
    constructor(id, name, price, description, imageLink){
        this.id = id
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageLink = imageLink;
    };

    get getName(){
        return this.name;
    };
    get getprice(){
        return this.price;
    };
    get getDescription(){
        return this.description;
    };
    get getImage(){
        return this.imageLink;
    };
    get getId(){
        return this.id;
    };
};