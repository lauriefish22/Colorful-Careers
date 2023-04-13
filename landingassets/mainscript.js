

// // Get dropdown-item value
// var colorValue = document.querySelectorAll(".dropdown-item");

// // Store value in variable
// let color;

// // Loop through dropdown-items
// for (let i = 0; i < colorValue.length; i++) {
//     colorValue[i].addEventListener("click", function() {
//         color = colorValue[i].innerHTML;
//         console.log(color);
//         document.getElementById("color").innerHTML = "You have chosen " + color + "!";
//     });
// }

// // Get submit button
// let submitBtn = document.getElementById("colorinput");

// // Add click listener to submit button
// submitBtn.addEventListener("click", function() {
//     // Store value
//     localStorage.setItem("color", color);
//     // console.log("color stored!");
// });
var cityStateBtn = document.getElementById("citystate-btn");
document.getElementsByClassName("button is-info")[0].addEventListener("click", myFunction);

function myFunction() {

    var citystate = document.getElementById("citystate").value;
    localStorage.setItem("citystate", citystate);
    console.log(citystate);
}



var colorInput = document.getElementById("colorinput");
var colorChoice = document.getElementById("colorchoice");
var dropdownMenu = document.getElementById("dropdown-menu");
var chosenColor;
colorInput.addEventListener("click", function (event) {
    var colorChoice = document.getElementById("colorchoice");
    chosenColor = colorChoice.textContent;
    console.log(chosenColor);
    localStorage.setItem("chosenColor", chosenColor);
    colorInput.setAttribute('disabled', true);
});

dropdownMenu.addEventListener("click", function (event) {
    var chosenColor = event.target.innerHTML;
    colorChoice.innerHTML = chosenColor;
});

cityStateBtn.addEventListener("click", function () {
    if (document.getElementById("citystate").value === "") {
        return
    }
    if (!chosenColor) {
        return
    }
    document.location = "job.html"
}
)
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
