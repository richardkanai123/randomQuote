const pQuote = document.querySelector("p");
const AuthorName = document.querySelector("span");
const NewQuote = document.querySelector(".generate");


NewQuote.addEventListener('click', GenQuote);


function GenQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        pQuote.textContent = data.content;
        AuthorName.textContent = data.author;
    });
}
