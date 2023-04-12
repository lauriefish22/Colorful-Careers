APIkey = 'cc0e5ff229msha7a08edcb4e2fa7p13c5b7jsn7c2c39bc9ff4';
let urlQuery = 'https://daddyjokes.p.rapidapi.com/random';

//function printJoke() {
fetch(urlQuery, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': APIkey,
        'X-RapidAPI-Host': 'daddyjokes.p.rapidapi.com'
    }
})

    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        console.log(response);
        console.log(response.joke)
        let newJoke = (response.joke);
        let newJokeContainer = document.getElementById('joke-start');
        //newJokeContainer.innerHTML = newJoke;
        let button = document.getElementById("button");
        button.addEventListener('click', function (e) {
            newJokeContainer.innerHTML = newJoke;
        });

    })

    .catch(function (err) {
        console.error(err);
    })



