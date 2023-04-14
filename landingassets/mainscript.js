
//Input form
//Event listener is attached to the submit city/state button
//Data set to local storage
var cityStateBtn = document.getElementById("citystate-btn");

function storeCity() {

    var citystate = document.getElementById("citystate").value;
    localStorage.setItem("citystate", citystate);
    console.log(citystate);
}
document.getElementsByClassName("button is-info")[0].addEventListener("click", storeCity);




//Event listener set up so that when the user chooses a color that value is stored.
//The dropdown menu and button are clicked and the user's chosen color is set
//The value is logged into local storage and the colorInput element, button, is disabled.
var colorInput = document.getElementById("colorinput");
var colorChoice = document.getElementById("colorchoice");
var dropdownMenu = document.getElementById("dropdown-menu");
var chosenColor;
colorInput.addEventListener("click", function (event) {
    var colorChoice = document.getElementById("colorchoice");
    chosenColor = colorChoice.textContent;
    console.log(chosenColor);
    // setting users chosen color into local storage
    localStorage.setItem("chosenColor", chosenColor);
    colorInput.setAttribute('disabled', true);
});
//Event listener is added to the dropdown menu.
dropdownMenu.addEventListener("click", function (event) {
    var chosenColor = event.target.innerHTML;
    colorChoice.innerHTML = chosenColor;
});

// adding an event listener to city state button 
cityStateBtn.addEventListener("click", function () {
    // if there is no color chosen and or citystate input then do nothing
    if (document.getElementById("citystate").value === "") {
        return
    }
    if (!chosenColor) {
        return
    }
    // if those aren't true then change document location to the job.html
    document.location = "job.html"
}
)
// adding animation to elements with class button
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
