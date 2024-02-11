//recuperation chaine de requet de l'url
const queryString_url_id =window.location.search;


//extraire id

const urlSearchParams = new URLSearchParams(queryString_url_id);

const id = urlSearchParams.get("id");


//affichage du produit avec l'id en question

const idProduitSelect = response.find((element) => element._id == id);

console.log(idProduitSelect);

//Selection de l'endroit ou mettre le produit
const positionElement2 = document.querySelector(".containerPageProduit");

//structure html pour le produit
const structureProduits2 =
`<article class = "mise-en-page-produit">
    <div class="produit">
<ul>
    <li>Nom: <span>${idProduitSelect.nomProduit}</span></li>
    <li>description: <span>${idProduitSelect.description}</span></li>
    <li>Prix: <span>${idProduitSelect.prix /100} €</span></li>

</ul>

<form>
    <label for="option_produit">Choisir l'option : </label>
        <select id="option_produit" name="option_produit">
        </select>

        <label for="option_produit">Choisir la quantité : </label>
        <select id="quantite_produit" name="quantite_produit">
        </select>
</form>
<button id="btn-envoi" type="submit" name="btn-envoi">Ajouter l'article au panier</button>

</article>`;

//Adaptation
const optionQuantite = idProduitSelect.options;
let structureOptions = [];


//boucle for pour afficher toutes les option possibles.
for (let j=0; j < optionQuantite.length; j++){
    structureOptions = structureOptions + 
    `<option value="${optionQuantite[j]}">${optionQuantite[j]}</option>
    `
    ;
}

//injection html dans la page
positionElement2.innerHTML = structureProduits2;

//injection html pour le formulaire
const positionElement3 = document.querySelector("#option_produit");
positionElement3.innerHTML = structureOptions;
console.log(positionElement3)


//Gestion Quantite
const structureQuantite = `
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
`;

const positionElementQuantite = document.querySelector("#quantite_produit");
positionElementQuantite.innerHTML = structureQuantite;




//Gestion du click du boutton ajouter au panier

const idForm = document.querySelector("#option_produit");

const btnPanier = document.querySelector("#btn-envoi");

btnPanier.addEventListener("click", (event)=>{
event.preventDefault();

//le choix de l'option.
const choixForm = idForm.value;

//Quantite mettre dnas une variable
const choixQuantite = positionElementQuantite.value;

//recupération des informations du formulaires.
let optionsProduit = {
    nomProduit: idProduitSelect.nomProduit,
    id_ProduitSelect: idProduitSelect._id,
    optionProduit: choixForm,
    quantite: choixQuantite,
    prix: (idProduitSelect.prix * choixQuantite) / 100

}

console.log(optionsProduit)

//---------------Le local storage-----------------
//--------------Stocker la recuperation des valeur-------------

let produitSaveInLocalStorage = JSON.parse(localStorage.getItem("produit"));


//fonction fenetre pop up
const popupConfirmation = () =>{
    if(window.confirm(`${idProduitSelect.nomProduit} option : ${choixForm} a bien été ajouté au panier Consultez le panier OK ou revenir à l'acceuil ANNULER`)){
window.location.href = "panier.html";
    }else{
        window.location.href = "../index.html";
    }

}

//fonction ajouter un prduit du local strorage
const ajoutProduitLocalStorage = () => {

    produitSaveInLocalStorage.push(optionsProduit);
    //transformation JSON  et l'envoyer dans la clé produit du local storage
    localStorage.setItem("produit", JSON.stringify(produitSaveInLocalStorage));
}
//if deja produit
if(produitSaveInLocalStorage){
    ajoutProduitLocalStorage();
    popupConfirmation();
}
//Sinon
else{
    produitSaveInLocalStorage = [];
    ajoutProduitLocalStorage();
    popupConfirmation();
}


})



