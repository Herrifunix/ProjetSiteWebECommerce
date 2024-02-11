import { Product } from "../javascript/Product.js";

//déclaration de la Database
export const response = [];


// construction d'une database
function initDataFast(price, desc, img, name=""){
    let key = "a" + response.length
    for (let j=1; j < 3; j++){
        if (name == ""){
            name = key
        };
        addNewProduct(key,name,price,desc,img);
    }
};

function addNewProduct(id, name, price, desc, img){
    response.push(createNewProduct(id, name, price, desc, img));
};

function createNewProduct(id, name, price, desc, img){
    return new Product(id, name, price, desc, img);
};

initDataFast(1,"desc","img",)

console.log(response);
