# Weather App

## Story

People Always Talk About The Weather...
Also they are always checking the weather in native and web applications.
Now you can go further and create your own web based Weather application!

## What are you going to learn?

- Create a GET requests
- Getting data from an open API
- Working with JSON files

## Tasks

1. Create a drop down list with some cities (include at least 5 different one - you can pick your favourite ones :) ) and create a table.  Changing the value of the drop down list should change the table to show the weather data (temperature, sky conditions, humidity) of the chosen city.
    - When we open up the page, there is a dropdown list with at least 5 cities in it
    - When we choose a city from the dropdown, the weather of this city is showing up

2. Extend the previous exercise to show not your favourite cities  but create a simple input field with autocomplete feature (so when the user starts typing, a list of cities appear which matches that search).
    - When we type in the dropdown, the list is filtered to the cities starting with the substring

3. [OPTIONAL] Do some improvements in order to make the web application more interesting.
    - Weather panel is showing a fetch api spinner while the content is loading [Sample loading fetch API spinner on Codepen](https://codepen.io/wang0nya/pen/bzwQPr).
    - Assign to chosen city a nice background image that fits nicely to the site and apply it on the background. You can create object which store city name and image url.
    - You can use Pexels API to get image for chosen city dynamically. Read the official [Pexels API Documentation](https://www.pexels.com/api/documentation).
    - Generate a free API key from in order to access the Pexels API.
    - Use presented endpoint to get image for chosen city e.g. for Krakow: https://api.pexels.com/v1/search?query=Krakow ![Weather App Pexels API in Postman](media/frontend/weather-app.png)

## General requirements

None

## Hints

- Plan carefully the project with your team mates
- You can use [this](https://www.weatherapi.com/docs/) API, you have to [register](https://www.weatherapi.com/signup.aspx) for free and use an Access ID/Secret Key.

## Background materials

- <i class="far fa-exclamation"></i> [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- <i class="far fa-exclamation"></i> [JavaScript Fetch API Examples](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)
- <i class="far fa-exclamation"></i> [Weather API](https://www.weatherapi.com/docs/)
