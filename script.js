const formEntries = document.querySelector('#formEntries')
const citationInput = document.querySelector('#citation')
const authorInput = document.querySelector('#author')
const buttonSend = document.querySelector('#buttonSend')

formEntries.addEventListener("submit", function(authorInput, citationInput){
    
    // document.body.style.backgroundColor = "red"
    console.log("✍️", authorInput, citationInput)
    console.log("✒️", citation)
    console.log("😁", author)
})

const author = (event) => {
    console.log(event.value)
}
author(formEntries)

buttonSend.addEventListener("click", function(event){
    console.log("bouton auteur",event.buttonSend)
})




// Les choses sérieuses commencent. Il est temps d’interagir avec notre page en JavaScript !

// On passe donc sur notre ficher JS. Ajoutez un gestionnaire d’événement avec addEventListener sur le formulaire,
//  n'hesitez pas à jeter un oeil à la documentation sur les forms ou les eventListener, c'est le moment ;).

// Dans la fonction appelée lors de la soumission du formulaire :

// - Récupérez les valeurs des champs <input> dans deux variables : text et author.
// - Utilisez console.log() pour afficher ces valeurs et vérifier leur récupération.