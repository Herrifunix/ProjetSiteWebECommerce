let produitSaveInLocalStorage = JSON.parse(localStorage.getItem("produit"));




//----------Affichage produit panier---------

//Selection de la classe ou mettre le html
const positionElement3 = document.querySelector("#container-produits-panier");
console.log(positionElement3);


//si panier vide
if(produitSaveInLocalStorage === null || produitSaveInLocalStorage == 0){
const panierVide = `
    <div class="container-panier-vide">
    <div> Le panier est vide</div>
    </div>`
    ;
    positionElement3.innerHTML = panierVide;
} else{
    let structureProduitsPanier = [];

    for(k = 0;k < produitSaveInLocalStorage.length; k++){
        structureProduitsPanier = structureProduitsPanier + `
        <div class="container-recapitulatif">
            <div id=ArticleId>Quantité : ${produitSaveInLocalStorage[k].quantite} - ${produitSaveInLocalStorage[k].nomProduit} Options : ${produitSaveInLocalStorage[k].optionProduit}</div>
            <div>Prix : ${produitSaveInLocalStorage[k].prix} € - <br><button class="btn-supprimer">Supprimer article</button>
            </div>
        </div>           
        `;
        }
        if(k == produitSaveInLocalStorage.length){
            positionElement3.innerHTML = structureProduitsPanier
        }
}

//-----------------------------Gestion du boutton supprimer------

let btn_supprimer = document.querySelectorAll(".btn-supprimer");

for (let l = 0; l < btn_supprimer.length; l++){
    btn_supprimer[l].addEventListener("click" , (event) =>{
        event.preventDefault();
        
        //Selection de l'id du produit qui va ^étre supprimer en cliquant sur le boutton
        let id_selectionner_suppression = produitSaveInLocalStorage[l].id_ProduitSelect;

        //avec la méthode filtrer
        produitSaveInLocalStorage = produitSaveInLocalStorage.filter( el => el.id_ProduitSelect !== id_selectionner_suppression);

        localStorage.setItem("produit", JSON.stringify(produitSaveInLocalStorage));


        //Alerte pour dire que l'objet est supprimer et rechargement de la page
        alert("Ce produit a été supprimer")
        window.location.href = "panier.html";
    });
}

//----------------Calcul du prix----------------
let prixtotalcalc = [];

 for (let m = 0 ; m < produitSaveInLocalStorage.length; m++){
    let prixProduitPanier = produitSaveInLocalStorage[m].prix;


    prixtotalcalc.push(prixProduitPanier)
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const prixTotal = prixtotalcalc.reduce(reducer,0);

const affichagePrix = `
<div class="affichage-prix">Le prix total est de ${prixTotal} € </div><hr>
`;

positionElement3.insertAdjacentHTML("beforeend",affichagePrix);


//------------------Bouton pour supprimer tout-----------------

const btn_suppr_all_html = `
<div id="centre">

<button class="btn_suppr_all"> Vider le panier</button>
</div>
`;

//insertion du boutton
positionElement3.insertAdjacentHTML("beforeend",btn_suppr_all_html);

const btn_suppr_all = document.querySelector(".btn_suppr_all");


//suppression de tout le localstorage

btn_suppr_all.addEventListener('click', (event)=>{
event.preventDefault();
localStorage.removeItem("produit");

//alert panier vidé
alert("Le panier a été vidé");
window.location.href = "panier.html";

});

//------Button valider commande-----------

const btnValideCommande = `
<a id="btnValideCommande" href="ValidationCommande.html">Valider la commande</a>
`;

console.log(positionElement3);

positionElement3.insertAdjacentHTML("beforeend",btnValideCommande);



   

