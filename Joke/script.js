APIkey = 'cc0e5ff229msha7a08edcb4e2fa7p13c5b7jsn7c2c39bc9ff4';
let urlQuery = 'https://dad-jokes.p.rapidapi.com/random/joke';
let jokeButton = document.getElementById('joke-button');
function getInfo() {
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
            //console.log(response);
            let jokeOfTheDay = response.body[0].setup;
            console.log(jokeOfTheDay);

        })
        .catch(function (err) {
            console.error(err)
        });
    jokeFinish = jokeOfTheDay.value;

    function showJoke() {
        let jokeOfTheDay = response.body[0].setup;
        jokeFinish = jokeOfTheDay.value;
        getInfo();
    }




    jokeButton.addEventListener('click', showJoke);

    showJoke();
}