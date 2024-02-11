import Product from "./javascript/Product.js";

class Database {
    constructor(){
        // initialisation de la database, un dictionnaire avec les catégories
        this.database = {};
        this.database["Cyclisme"] = [];
        this.database["Football"] = [];
        this.database["Natation"] = [];
        this.database["Gymnastique"] = [];
        this.database["Musuculation"] = [];

        /* architecture de la database : 
        dictionnaire{
            categorie : liste[
                Objet Product {name : "string", price : int, description : "string", imageLink : "./images/..."},
                Objet Product {...},
                ...],
            categorie : liste[
                Objet Product {..},
                Objet Product {...};
                ...],
            ...};
        */

        // pour tester et generer raidement des exemples
        this.initDataFast(1, "lore", "./image/logo.png");
        };

    createNewProduct(name, price, desc, img){
        return new Product(name, price, desc, img);
    };

    initDataFast(price, desc, img, name=""){
        let box = "box";
        for(let key in this.database) {
            for (let j=1; j < 3; j++){
                if (name == ""){
                    name = `${key+j}`
                };
                let productTempo = this.addNewProduct(key,name,price,desc,img);
                // let box = "box";
                
                // // creer les elements en html
                // eval('let ' + box + key + j + ' = document.createElement("article")' + ';');
                // eval(box + key + j +'.innerHTML = ' + '"' + productTempo +'"');
                // document.getElementsByTagName('section').appendChild(eval(box + key + j));
            }
        };
        console.log(this.database);
    };

    addNewProduct(categorie, name, price, desc, img){
        this.database[categorie].push(this.createNewProduct(name, price, desc, img));
    };
};


let database = new Database;
console.log(database.database);