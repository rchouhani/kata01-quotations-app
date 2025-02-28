const formEntries = document.querySelector('#formEntries')
const quoteInput = document.querySelector('#quote')
const authorInput = document.querySelector('#author')
const buttonSend = document.querySelector('#buttonSend')

formEntries.addEventListener("click", function(event){
    
    // document.body.style.backgroundColor = "red"
    console.log("✍️", quoteInput)
    console.log("😁", authorInput)
})

buttonSend.addEventListener("click", function(event){
    console.log("bouton auteur",buttonSend.value)   
})
const addQuote = (quote, author) =>{
    const newParagraphQuote = document.createElement('p')
    newParagraphQuote.setAttribute('text')
    const newParagraphAuthor = document.createElement('p')
    newParagraphAuthor.setAttribute('author')
    newParagraphQuote.innerText = quote
    newParagraphAuthor.innerText = author
}

// Nous allons maintenant afficher les citations saisies directement sur la page.

// - Créez une fonction addQuote(quote, author) prenant deux paramètres (quote et author, du coup).
// - Dans cette fonction :
//     - Créez un élément <p> pour la citation et attribuez-lui la classe "text".
//     - Créez un élément <p> pour l’auteur/autrice et attribuez-lui la classe "author".
//     - Insérez les valeurs des paramètres quote et author dans ces éléments.
//     - Créez une <div> avec la classe "quote", puis ajoutez-y les deux paragraphes.
//     - Récupérez l’élément ayant l’id "quote-list" et ajoutez-y la nouvelle citation avec appendChild().
// - Modifiez le gestionnaire d’événements du formulaire pour appeler addQuote() au lieu de simplement afficher les valeurs dans la console.

// Besoin d'un coup de main ? Vous pouvez créer un élément en JS avec la fonction document.createElement('div')