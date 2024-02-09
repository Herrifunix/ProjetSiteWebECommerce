class Product{
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

class Database {
    constructor(){
        let velo1 = new Product("velo1", 1, "placeholder", "../images/logo.png")
        let foot1 = new Product("foot1", 1, "placeholder", "../images/logo.png")
        let basket1 = new Product("basket1", 1, "placeholder", "../images/logo.png")
        let gym1 = new Product("gym1", 1, "placeholder", "../images/logo.png")
        this.database = [];
        this.database.push(
            velo1,
            foot1,
            basket1,
            gym1
        );
    };

};

let database = new Database;
console.log(database.database)