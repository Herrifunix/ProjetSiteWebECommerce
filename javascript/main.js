

//declaration des variable
let _id = [];
let nomProduit = [];
let description = [];
let prix = [];
let structureProduits = "";
let i = []; 

//fonction va afficher les produits dans la page web auto

function affichageProduits(response){
    
    const positionElement = document.querySelector(".containerProduits");
//mettre les donnée dans les variables

//boucle for pour afficher les objet
    for (i=0; i < response.length; i++){


    response.forEach((element, i) => {
            _id[i] = element._id;
            nomProduit[i] = element.nomProduit;
            description[i] = element.description;
            prix[i] = element.prix;

    });
    //afficher les objets sur la page web
    structureProduits += 
    ` 
    
        <article class = "mise-en-page-produit">
            <a href="../html/produit.html?id=${_id[i]}">
                <ul>
                    <li>Nom: <span>${nomProduit[i]}</span></li>
                    <li>description: <span>${description[i]}</span></li>
                    <li>Prix: <span></span>${prix[i] /100} €</li>
                
                </ul>
                </a>
        </article>
    
    `;

    //injection html

    positionElement.innerHTML = structureProduits;


 }
    
}



//Ca change quasi rien
window.onload = () => {
affichageProduits(response);
};







/*
// Mettre les données sur la page indexedDB.html
//---------------Produit1-----------------//

const nomProduit01 = response[0].nomProduit;
const description01 = response[0].description;
const prix01 = response[0].prix;

// insertion au DOM

const affichage_nomProduit01 = document.querySelector(".produit1 li:nth-child(1) span");

const affichage_description01 = document.querySelector(".produit1 li:nth-child(2) span");

const affichage_prix01 = document.querySelector(".produit1 li:nth-child(3) span");

console.log(affichage_nomProduit01);


// DOM affichage

affichage_nomProduit01.innerHTML = nomProduit01; 
affichage_description01.innerHTML = description01; 
affichage_prix01.innerHTML = prix01; 


//----------Produit 02-------------//

const nomProduit02 = response[1].nomProduit;
const description02 = response[1].description;
const prix02 = response[1].prix;

// insertion au DOM

const affichage_nomProduit02 = document.querySelector(".produit2 li:nth-child(1) span");

const affichage_description02 = document.querySelector(".produit2 li:nth-child(2) span");

const affichage_prix02 = document.querySelector(".produit2 li:nth-child(3) span");


// DOM affichage

affichage_nomProduit02.innerHTML = nomProduit02; 
affichage_description02.innerHTML = description02; 
affichage_prix02.innerHTML = prix02; */








/*<article class="produits">
                    <ul>
                        <li>Nom: <span></span></li>
                        <li>description: <span></span></li>
                        <li>Prix: <span></span></li>
                    
                    </ul>
                </article>

                <article class="produit2">
                    <ul>
                        <li>Nom: <span></span></li>
                        <li>description: <span></span></li>
                        <li>Prix: <span></span></li>
                    
                    </ul>
                </article>

                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam libero obcaecati eaque quaerat, saepe cum. Eveniet excepturi inventore molestiae nobis ab. Laborum facere adipisci perferendis dolorum distinctio expedita rem?
                </article>

                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur neque fugit exercitationem, ipsam optio incidunt aut officia laborum esse, impedit praesentium excepturi maxime. Quae, ullam alias molestias sequi fugit consectetur!
                </article>

                <article>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione ullam ipsum, saepe, suscipit at debitis, minus similique vel repellendus neque a soluta dolore doloribus? Velit modi porro recusandae rem animi.
                </article>

                <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex faacere cupiditate incidunt assumenda voluptatem aperiam dolore nisi optio. Quo voluptatibus suscipit corporis iusto nemo fugit harum eligendi facilis eaque temporibus.
                </article>*/