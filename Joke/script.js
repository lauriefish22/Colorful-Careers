APIkey = 'cc0e5ff229msha7a08edcb4e2fa7p13c5b7jsn7c2c39bc9ff4';
let urlQuery = 'https://dad-jokes.p.rapidapi.com/random/joke';
let jokeButton = document.getElementById('joke-button');
let jokeQuestion = document.getElementById('joke-start');

fetch(urlQuery, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': APIkey,
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
})



    .then(function (response) {
        return response.json()
    })
    .then(function (response) {

        let jokeOfTheDay = response.body[0].setup;
        console.log(jokeOfTheDay);
        jokeQuestion.textContent = jokeOfTheDay.value();


    })
    .catch(function (err) {
        console.error(err)
    });








