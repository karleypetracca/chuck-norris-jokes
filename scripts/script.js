"use strict";

let category = 'dev';

const refreshButton = document.querySelector("#refresh"),
    selectCategory = document.querySelector("#selectCategory");

function getQuote(category) {
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const chuckSaysParagraph = document.querySelector("#chuckSays");
    get(apiUrl).then(response => chuckSaysParagraph.innerHTML = response.value);
}

refreshButton.addEventListener("click", function(event) {
    event.preventDefault();
    getQuote(category);
})

selectCategory.addEventListener("click", function(event) {
    event.preventDefault();
    if (category != selectCategory.value) {
        category = selectCategory.value;
        getQuote(category);
    }
})

getQuote(category);