
//Input form
//Event listener is attached to the submit city/state button
//Data set to local storage
var cityStateBtn = document.getElementById("citystate-btn");
document.getElementsByClassName("button is-info")[0].addEventListener("click", myFunction);

function myFunction(){
    
    var citystate = document.getElementById("citystate").value;
    localStorage.setItem("citystate", citystate);
    console.log(citystate);
}


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
    localStorage.setItem("chosenColor", chosenColor);
    colorInput.setAttribute('disabled', true);
});
//Event listener is added to the dropdown menu.
dropdownMenu.addEventListener("click", function (event) {
    var chosenColor = event.target.innerHTML;
    colorChoice.innerHTML = chosenColor;
});

cityStateBtn.addEventListener("click",function(){
    if(document.getElementById("citystate").value ===""){
        return
    }
    if(!chosenColor){
        return
    }
    document.location = "job.html"
}
)

