# Colorful Careers
Web application to help users find jobs in their area based on color psychology  

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     |  
| Bulma | [https://bulma.io/documentation/](https://bulma.io/documentation/)     |  
| Anime.js | [https://animejs.com/documentation/](https://animejs.com/documentation/)     |  
| Jsearch API | [https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)     |  
| Daddy Jokes API | [https://rapidapi.com/Bmbus/api/daddyjokes/](https://rapidapi.com/Bmbus/api/daddyjokes/)     | 
| Canva | [https://www.canva.com/](https://www.canva.com/)     |  

## Description 

[Visit Colorful Careers](https://lauriefish22.github.io/Colorful-Careers/)

Colorful Careers uses aspects of color psychology testing to match users with career options and job openings in their area.

Deciding on a career can be one of the most stressful things in your life.   Whether it changing careers, just starting out or going back to school there is almost always doubt that you are making the right choice.  We are here to help!  What better way to choose your career than to let our app do it for you? 

After you choose a color from the dropdown menu and enter in your location, you will be shown which career path you should pursue and be able to see what jobs in that field are available in your area.  Excited?  Wait. There is more!  

We want to take even more stress away from you and make you laugh a bit.  After you submit your information you will be able to have a chuckle at a joke 😂


![Site Langing Page](./assets/colorful-readme.gif)


## Table of Contents 

* [Code Example](#code-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)


## Code Example

Using fetch to request data from the Jsearch API 

```JS
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
            for (var i = 0; i < data.data.length; i++)
            })
```
We also experienced new libraries for CSS and JS.  Bulma was used for styling and Anime for JS.  Below are examples of both.


**ANIME**

Using anime.js to add animation to a button
```anime({
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
```
**BULMA**

Using Bulmas prebuilt elements to create a dropdown menu
```<div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                    <button class="button2" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span id="colorchoice">Color Choice</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
```

## Usage 

Finds job openings based on users location and color choice.  


![Landing Page Screen shot](./assets/Screenshot%202023-04-13%20182927.png)


## Learning Points 

It was great for all of us to explore different libraries.  It can be easy to get used to only one "way" but you never know what you are missing out on if you don't experience other libraries and opportunities to either improve your project or make it easier to build.  It was also great practice in using API's and finding out (the hard way) that you may need to go through multiple API's to find the one that works for your project.  More than anything, it was our first experience in working with a group and not only practicing using github and different branches but about communication and helping each other out when needed. 

* New js libraries
* Collaborative Git workflow
* Server side apis
* Bulma 
* Anime.js 



## Author Info


###  Kakazi Kitenge



###  Shea Schwennicke


* [Portfolio](https://sheaschwenn.github.io/Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/shea-schwennicke-76a378210/)
* [Github](https://github.com/sheaschwenn)

###  Laurie Fish


* [Github](https://github.com/lauriefish22)



## Credits

We gathered information from [indeed](https://www.indeed.com/career-advice/finding-a-job/color-psychology-test) for our color descriptions and job-color assignments. 


## License
MIT License

For more information please refer to the LICENSE in the repo.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.