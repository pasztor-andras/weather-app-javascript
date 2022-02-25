var citySelector = document.getElementById("cities")
var selectedCity = ""

citySelector.addEventListener('input',updateCity)

function updateCity(){
    changeCity()
    getData()
}

function changeCity(){
    selectedCity = citySelector.value
}
changeCity()

const spinner = document.getElementById("loading")
const main = document.getElementById('main')
function loadData() {
    spinner.removeAttribute('hidden')
    main.setAttribute('hidden', '')
    setTimeout(function(){
        spinner.setAttribute('hidden', '')
        main.removeAttribute('hidden')
    },3000)
}

const button = document.querySelector('button')

button.addEventListener('click', ()=>{
    async function getData(){
        let url = "http://api.weatherapi.com/v1/current.json?key=96d3107260874a57b50102545221902&q=" + selectedCity + "&aqi=no%22"
        
        let response = await fetch(url)
        let parsedData = await response.json() //nyers adat
    
        const city = document.getElementById('city')
        const country = document.getElementById('country')
        const tempature = document.getElementById('tempature')
        const sky = document.getElementById('skyCondition')
        const skyP = document.getElementById('skyCond')
        const humidity = document.getElementById('humidity')
        const skyImg = document.getElementById('skyImg')
        const wind = document.getElementById('wind')
        const cloud = document.getElementById('cloud')
        const feelslike = document.getElementById('feelslike')
        const pressure = document.getElementById('pressure')
    
        city.innerHTML = parsedData.location.name
        country.innerHTML = parsedData.location.country
        tempature.innerHTML = 'Tempature: ' + parsedData.current.temp_c + ' °C'
        skyP.innerHTML = parsedData.current.condition.text
        skyImg.setAttribute('src',parsedData.current.condition.icon)
        skyImg.style.width='100px'
        skyImg.style.height='100px'
        humidity.innerHTML = 'Humidity: ' + parsedData.current.humidity
        wind.innerHTML = 'Wind: ' + parsedData.current.wind_kph + ' Km/h'
        cloud.innerHTML = 'Cloud: ' + parsedData.current.cloud + ' %'
        feelslike.innerHTML = 'Feelslike: ' + parsedData.current.feelslike_c + ' °C'
        pressure.innerHTML = 'Pressure: ' + parsedData.current.pressure_mb + ' mb'

        
        const main = document.body
        main.style.backgroundSize = "cover"
        main.style.backgroundRepeat = "no-repeat"

        if (citySelector.value == "Berlin") {
            main.style.backgroundImage = "url(pictures/Berlin.jpg)"
        } else if (citySelector.value == "Budapest") {
            main.style.backgroundImage = "url(pictures/Bp.jpg)"
        } else if (citySelector.value == "London") {
            main.style.backgroundImage = "url(pictures/London.jpg)"
        } else if (citySelector.value == "Paris") {
            main.style.backgroundImage = "url(pictures/Paris.jpg)"
        } else if (citySelector.value == "Prague") {
            main.style.backgroundImage = "url(pictures/Prague.jpg)"
        }
    }
    getData()
})


var isMouseDown,initX,initY,height = draggable.offsetHeight,width = draggable.offsetWidth;

draggable.addEventListener('mousedown', function(e) {
  isMouseDown = true;
  document.body.classList.add('no-select');
  initX = e.offsetX;
  initY = e.offsetY;
})

document.addEventListener('mousemove', function(e) {
  if (isMouseDown) {
    var cx = e.clientX - initX,
        cy = e.clientY - initY;
    if (cx < 0) {
      cx = 0;
    }
    if (cy < 0) {
      cy = 0;
    }
    if (window.innerWidth - e.clientX + initX < width) {
      cx = window.innerWidth - width;
    }
    if (e.clientY > window.innerHeight - height+ initY) {
      cy = window.innerHeight - height;
    }
    draggable.style.left = cx + 'px';
    draggable.style.top = cy + 'px';
  }
})

draggable.addEventListener('mouseup', function() {
  isMouseDown = false;
  document.body.classList.remove('no-select');
})
