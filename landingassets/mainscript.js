

// Get dropdown-item value
var colorValue = document.querySelectorAll(".dropdown-item");

// Store value in variable
let color;

// Loop through dropdown-items
for (let i = 0; i < colorValue.length; i++) {
    colorValue[i].addEventListener("click", function() {
        color = colorValue[i].innerHTML;
        console.log(color);
        document.getElementById("color").innerHTML = "You have chosen " + color + "!";
    });
}

// Get submit button
let submitBtn = document.getElementById("colorinput");

// Add click listener to submit button
submitBtn.addEventListener("click", function() {
    // Store value
    localStorage.setItem("color", color);
    // console.log("color stored!");
});

document.getElementsByClassName("button is-info")[0].addEventListener("click", myFunction);

function myFunction(){
    var citystate = document.getElementById("citystate").value;
    localStorage.setItem("citystate", citystate);
    console.log(citystate);
}

