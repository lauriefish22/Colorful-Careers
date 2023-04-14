// api key for daddy jokes 
APIkey = 'cc0e5ff229msha7a08edcb4e2fa7p13c5b7jsn7c2c39bc9ff4';
let urlQuery = 'https://daddyjokes.p.rapidapi.com/random';

// fetch request for daddy jokes api 
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
        // rendering joke from fetch on page
        let newJoke = (response.joke);
        let newJokeContainer = document.getElementById('joke-start');
        newJokeContainer.innerHTML = newJoke;
        

    })
// catching and printing any errors in console
    .catch(function (err) {
        console.error(err);
    })



// pointing to div of job-options in html
var jobOptions = document.getElementById("job-options")

// creating a function to assign jobs to colors and fetch job with user specific query
function getJob() {
    var job;
    // getting the users color choice from local storage
    var userColor = localStorage.getItem("chosenColor")
    console.log("The user chose " + userColor);
    // if statements to match users choice with jobs 
    if (userColor === "Gold") {
        job = "Lawyer"
    }
    if (userColor === "Orange") {
        job = "Journalist"
    }
    if (userColor === "Green") {
        job = "Web developer"
    }
    if (userColor === "Blue") {
        job = "Mediator"
    }
    console.log(job)
    // getting the users location from local storage
    var city = localStorage.getItem("citystate")
// creating variable for query to include the job for color chosen and user location
    var search = job + " " + city
    // fetch request to jsearch api with search variable and page parameters
    fetch('https://jsearch.p.rapidapi.com/search?query=' + search + '&page=1&num_pages=1',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2a85d5b83amsh63ca45e7faf958fp1fa3e8jsnb8946c519ebe',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
        })
        .then(function(response){
            return response.json()
        })
         
        .then(function (data) {
            console.log(data)

// clearing out anything within job options before running through for loop
            jobOptions.textContent = ""
            // for loop to iterate through all job possibilities posted (max 10 from query)
            for (var i = 0; i < data.data.length; i++) {
// adding bulma card html within div job-options for each job posibility using template literal
                jobOptions.innerHTML += ` 
    <div class="card column is-3 m-4">
    <div class="card-image">
        <figure class="image is-square">
            <img src="${data.data[i].employer_logo || "./assets/smile.jpg"}" alt="Company Logo">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">

            <div class="media-content">
                <h3 class="title is-4 has-text-centered">${data.data[i].job_title}</h3>
                <p class="subtitle is-6">Employer: ${data.data[i].employer_name}</p>
            </div>
        </div>

        <div class="content">
            <p>Hours: ${data.data[i].job_employment_type}</p>
            <a href="${data.data[i].job_apply_link}">Apply here</a>
            <br>
        </div>
    </div>
</div>
`



            }
        })
        .catch(function (err) {
            console.error(err);
        })
}
// calling function to render user specific job cards 
getJob()



// modal functionality


$(".modal-button").click(function () {
    var target = $(this).data("target");
    $("html").addClass("is-clipped");
    $(target).addClass("is-active");
});

$(".modal-close").click(function () {
    $("html").removeClass("is-clipped");
    $(this).parent().removeClass("is-active");
});

function toggle(obj) {
    var obj = document.getElementById(obj);
    if (obj.style.display == "block") obj.style.display = "none";
    else obj.style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
            location.reload()
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
            location.reload()
        }
    });
});

