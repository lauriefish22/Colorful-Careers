var id = 1
var apiKeyPlant = "sk-UNlY64330b5778d68470";
// var requestUrl = 'https://perenual.com/api/species-list?page=1&key='+ apiKeyPlant;
var requestUrl = "https://perenual.com/api/species/details/"+id+"?key="+apiKeyPlant;



fetch(requestUrl)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Use the console to examine the response
            console.log(data);
        });


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4b40e0fa57msha34ad412a63ed67p1b9489jsn815115d28ee6',
                'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com'
            }
        };
        var zipcode = 93430
        fetch('https://plant-hardiness-zone.p.rapidapi.com/zipcodes/'+zipcode, options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));