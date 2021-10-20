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
        
        let url = "http://api.weatherapi.com/v1/current.json?key=54f66a90fbd841afa23121456211810&q=" + selectedCity + "&aqi=no%22"
        
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
    
        // city.innerHTML = parsedData.location.name +'<br>'+ parsedData.location.country
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
    }
    getData()
})


// async function searchData(){
//     let url2 = "http://api.weatherapi.com/v1/search.json?key=54f66a90fbd841afa23121456211810&q="

//     let response2 = await fetch(url2)
//     let parsedData2 = await response2.json()
//     console.log(parsedData2)
    
//     const city2 = document.getElementById('city')
//     const tempature2 = document.getElementById('tempature')
//     const sky2 = document.getElementById('skyCondition')
//     const humidity2 = document.getElementById('humidity')
//     const skyImg2 = document.getElementById('skyImg')

//     city2.innerHTML = parsedData2.name
//     // tempature2.innerHTML = parsedData2.current.temp_c + ' °C'
//     // let pElem = document.createElement('p')
//     // pElem.innerHTML = parsedData2.current.condition.text
//     // sky2.appendChild(pElem)
//     // skyImg2.setAttribute('src',parsedData2.current.condition.icon)
//     // humidity2.innerHTML = parsedData2.current.humidity
// }
// searchData()