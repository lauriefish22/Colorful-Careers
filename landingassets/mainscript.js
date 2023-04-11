

// Get dropdown-item value
let colorValue = document.querySelectorAll(".dropdown-item");

// Store value in variable
let color;

// Loop through dropdown-items
for (let i = 0; i < colorValue.length; i++) {
    colorValue[i].addEventListener("click", function() {
        color = colorValue[i].innerHTML;
        console.log(color);
    });
}

// Get submit button
let submitBtn = document.getElementById("colorinput");

// Add click listener to submit button
submitBtn.addEventListener("click", function() {
    // Store value
    localStorage.setItem("color", color);
    console.log("color stored!");
});