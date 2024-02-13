

//declaration des variable
let _id = [];
let nomProduit = [];
let description = [];
let prix = [];
let structureProduits = "";
let i = []; 
let img =[];
let motsCles =[];

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
            img[i] = element.img;
            motsCles[i] = element.motsCles;
        
    });
    
    //afficher les objets sur la page web
    structureProduits += 
    ` 
        <article class = "mise-en-page-produit" data-mots-cles="${motsCles[i]}">
            <a href="html/produit.html?id=${_id[i]}">
                
                <ul>
                    <img src=${img[i]}>
                    <li><span>${nomProduit[i]}</span></li>
                    <li><span>${description[i]}</span></li>
                    <li>Prix : ${prix[i] /100} €</li>
                
                </ul>
            </a>   
        </article>
    
    `;

    //injection html
    positionElement.innerHTML = structureProduits;

    
 }

}



function filtrerParCategorie(categorie) {
    const produitsss = document.querySelectorAll(".mise-en-page-produit");

    produitsss.forEach(produit => {
        // Alternative pour accéder aux mots clés du produit
        const motsClesProduit = produit.getAttribute("data-mots-cles");

        if (motsClesProduit && motsClesProduit.split(", ").includes(categorie)) {
            produit.style.display = "block";
        } else {
            produit.style.display = "none";
        }
    });
}

// Écouter les clics sur les boutons de catégorie
const boutonsCategories = document.querySelectorAll(".categorie-btn");

boutonsCategories.forEach(bouton => {
    bouton.addEventListener("click", () => {
        // Récupérer la catégorie associée au bouton
        const categorie = bouton.dataset.categorie;
        // Appeler la fonction de filtrage avec la catégorie sélectionnée
        filtrerParCategorie(categorie);

        console.log(categorie);
    });
});


//Ca change quasi rien
window.onload = () => {
affichageProduits(response);
};


