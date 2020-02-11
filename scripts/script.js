"use strict";


// establishing global variables
let category = 'animal';

const refreshButton = document.querySelector("#refresh"),
    selectCategory = document.querySelector("#selectCategory"),
    closeModalButton = document.querySelector("#closeModal");


// function pulls categories from chuck norris api and appends to html/select
// option on page
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

// function pulls quote from chuck norris api based on changeable variable and
// toggles modal window
function getQuote(category) {
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const chuckSaysParagraph = document.querySelector("#chuckSays");
    const modalWindow = document.querySelector(".modal-overlay");
    get(apiUrl).then(function(response) {
        chuckSaysParagraph.innerHTML = response.value;
        modalWindow.classList.toggle("open");
    });
}

// event listener added to refresh button with quote pull action
refreshButton.addEventListener("click", function(event) {
    event.preventDefault();
    getQuote(category);
})

// event listener added to select category list with quote pull action if
// category is changed
selectCategory.addEventListener("click", function(event) {
    event.preventDefault();
    if (category != selectCategory.value) {
        category = selectCategory.value;
        getQuote(category);
    }
})

// close Modal
closeModalButton.addEventListener("click", function(event) {
    const modalWindow = document.querySelector(".modal-overlay");
    modalWindow.classList.toggle("open");
})

// run key functions to start page
buildCategories();
// getQuote(category);