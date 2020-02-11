"use strict";


let category = 'animal';

const refreshButton = document.querySelector("#refresh"),
    selectCategory = document.querySelector("#selectCategory");

function buildCategories() {
    const categoryUrl = `https://api.chucknorris.io/jokes/categories`;
    const selectCategory = document.querySelector("#selectCategory");
    get(categoryUrl).then(function(response) {
        response.forEach (function(element) {
            const categoryElement = document.createElement("option");
            categoryElement.value = element;
            if (element != "explicit") {
                categoryElement.innerHTML += element[0].toUpperCase() + element.substring(1);
                selectCategory.appendChild(categoryElement);
            }
        })
    })
}

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

buildCategories();
getQuote(category);