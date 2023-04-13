# grow-your-garden
-[Github]()
-[Live Site]()


## Pic
![assets]()

## Contributors
```-Kakazi Kitenge```<br>
```-Shea Schwennicke```<br>
```-Laurie Fish```


## Description
Deciding on a career can be one of the most stressful things in your life.  As people the job search and think about possibly going back to school, there is almost always doubt that you aren't making the right choice for yourself and going into a career that isn't meant for you.  We are here to help!  What better way to choose your career than to let our app do it for you?  Our very scientific project will help you show which career you should pursue according to which color you choose on our site.  

After you choose a color and enter in your location, you will be shown which career path you should pursue and be able to see if that job is available in your area.  Excited?  Wait. There is more!  

We want to take even more stress away from you and make you laugh a bit.  After you submit your information you will be able to have a chuckle at a joke 😂



## Technology Used
-[Lodash](https://lodash.com/)<br>
-[Bulma](https://bulma.io/)<br>
-[Anime](https://animejs.com/)<br>
-[Canva](https://www.canva.com/)<br>

## Code Example

```API's were the focus of this project and here is a great example of using the API for a job search to find careers by location.``` 

```var search = job + " " + city
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
```We also experienced new libraries for CSS and JS.  Bulma was used for styling and Anime for JS.  Below are examples of both.``` 

**ANIME**

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

```<div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                    <button class="button2" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span id="colorchoice">Color Choice</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
```

## Learning Points

