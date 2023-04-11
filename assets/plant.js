// Pseudo code 
// user enters zip code and writting sample 
// return different levels of personality 
// choose the big 5 
// store those into an object
// whichever one is bigger use as the main
//  return whichever one is bigger 
// if statement for whichever one is bigger if > &&&
// then display these five/three options 
// on click of each one then 
// use that click as the query parameter for jobs near 
// also use the users stored zip code as a search parameter 

// var jobOptions = document.getElementById("job-options")
// var chosenOptions; //array or object to contain job options based on each major personality
// for(var i = 0; i<chosenOptions.length;i++){

// }




// fetch(requestUrlDetails)

//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         // Use the console to examine the response
//         console.log(data);
//     });





    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b40e0fa57msha34ad412a63ed67p1b9489jsn815115d28ee6',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    
    var job = "lawyer"
    var location = "Santa Barbara CA"
    fetch('https://jsearch.p.rapidapi.com/search?query='+job+location+'&page=1&num_pages=1', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));



