import { Product } from "../javascript/Product.js";

//déclaration de la Database
export const response = [];

// pour init a la main la database :
// -> commenter l'appel d'initdatabase
// -> rentrer les données a la main avec [addNewProduct(...,...,...,...,...),addNewProduct(),...]

// construction d'une database
function initDataFast(price, desc, img, name=""){
    for (let j=1; j < 10; j++){
        let key = "a" + response.length
        if (name == ""){
            let reName = key;
        };
        addNewProduct(key, reName, price, desc, img);
    };
};

function addNewProduct(id, name, price, desc, img){
    response.push(createNewProduct(id, name, price, desc, img));
};

function createNewProduct(id, name, price, desc, img){
    return new Product(id, name, price, desc, img);
};

// commenter la ligne du dessous dans le cas où on ne veut plus init automatiquement
initDataFast(1,"desc","img",);

console.log(response);