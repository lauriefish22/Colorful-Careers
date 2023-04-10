// APIkey = "b22117870ceafb1d552be08733c46fd7";
// app_id = "8f62ed6a";
// //var queryURL = "https://api.edamam.com/doc/open-api/recipe-search-v2";


// var queryURL = 'https://api.edamam.com/api/nutrition-details?app_id=' + app_id + '&app_key=' + APIkey;

// function displayRecipes
//     pic from page 2 to match array parameter of food
// for loop to match to the array
// if statement if nothing matches the search

// function Render
//     all recipes have same styling and added to an array


//     addEventListener on click to go to displayRecipes function
//     addEventListener on click to link to recipe page

//const axios = require("axios");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cc0e5ff229msha7a08edcb4e2fa7p13c5b7jsn7c2c39bc9ff4',
        'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
};
let foodItem = "pickle";
fetch('https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&q=' + foodItem, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));