const formEntries = document.querySelector('#formEntries')
const quoteInput = document.querySelector('#quote')
const authorInput = document.querySelector('#author')
const buttonSend = document.querySelector('#buttonSend')

formEntries.addEventListener('submit', (e)=>{
    e.preventDefault();
    addQuote(quoteInput, authorInput)
})

const addQuote = (quoteInput, authorInput) =>{
    const newParagraphQuote = document.createElement('p')
    newParagraphQuote.setAttribute('text')
    const newParagraphAuthor = document.createElement('p')
    newParagraphAuthor.setAttribute('author')
    newParagraphQuote.innerText = quoteInput.value
    newParagraphAuthor.innerText = authorInput.value
}