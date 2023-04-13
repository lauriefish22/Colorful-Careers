// Pseudo code 
// choose color store this user variable in local storage
// type in location store this variable in local storage 
// on submit button click change locations to other html
// create an object with answers or create an array that contains different 
// create an array of objects with color job key value pairs 
// if statement if usercolor input ==== red then job = red job
// text content of header is random joke of the day
// text content of header is information about what each color means 
//  body of doc contains cards for the first 10 job items 

// reach styling of background is a variation of the color that the user chose



APIkey = 'cc0e5ff229msha7a08edcb4e2fa7p13c5b7jsn7c2c39bc9ff4';
let urlQuery = 'https://daddyjokes.p.rapidapi.com/random';

function printJoke() {
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
        // let button = document.getElementById("button");
        // button.addEventListener('click', function (e) {
        newJokeContainer.innerHTML = newJoke;
        // });

    })

    .catch(function (err) {
        console.error(err);
    })


}

var jobOptions = document.getElementById("job-options")
function getJob() {
    var job;
    var userColor = localStorage.getItem("chosenColor")
    console.log("The user chose " + userColor);
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
    var city = localStorage.getItem("citystate")

    var search = job + " " + city
    fetch('https://jsearch.p.rapidapi.com/search?query=' + search + '&page=1&num_pages=1',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'cc0e5ff229msha7a08edcb4e2fa7p13c5b7jsn7c2c39bc9ff4',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(function (data) {
            console.log(data)


            jobOptions.textContent = ""
            // console.log(data.data)
            for (var i = 0; i < data.data.length; i++) {

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
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});

anime({
    targets: '.button',
    translateY: [
        { value: 300, duration: 800 },
        { value: 0, duration: 800 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    }
});