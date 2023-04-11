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

// var chosenOptions; //array or object to contain job options based on each major personality
// for(var i = 0; i<chosenOptions.length;i++){



// var apiKey = '4b40e0fa57msha34ad412a63ed67p1b9489jsn815115d28ee6';
// var requestUrl = 'https://jsearch.p.rapidapi.com/search?query='+job+apiKey




var jobOptions = document.getElementById("job-options")
function getJob() {

    var city = "santa barbara"
    var job = "chef"
    var search = job + " " + city
    fetch('https://jsearch.p.rapidapi.com/search?query=' + search + '&page=1&num_pages=1',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4b40e0fa57msha34ad412a63ed67p1b9489jsn815115d28ee6',
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
    <div class="card column is-3">
    <div class="card-image">
        <figure class="image is-4by3">
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
        .catch(function(err){
            console.error(err);
        })
}

getJob()



