function showCities(){
    // let select = document.getElementById('select')
    let list = document.querySelector('ul')
    if(list.style.display == 'none'){
        list.style.display = 'inline'
    }else{
        list.style.display = 'none'
    }
}

async function getData(){
    let selectedCity = ""
    document.querySelector('select').addEventListener("change",changeCity)
    function changeCity(){
        selectedCity = document.querySelector('select').value
        console.log(selectedCity)
        return selectedCity
    }
    console.log(changeCity())
    let url = http://api.weatherapi.com/v1/current.json?key=54f66a90fbd841afa23121456211810&q=${changeCity()}&aqi=no%22
    console.log(changeCity())
    let response = await fetch(url)
    let parsedData = await response.json() //nyers adat
    console.log(parsedData)

    const city = document.getElementById('city')
    const tempature = document.getElementById('tempature')
    const sky = document.getElementById('skyCondition')
    const humidity = document.getElementById('humidity')
    const skyImg = document.getElementById('skyImg')

    city.innerHTML = parsedData.location.name
    tempature.innerHTML = parsedData.current.temp_c + ' °C'
    let pElem = document.createElement('p')
    pElem.innerHTML = parsedData.current.condition.text
    sky.appendChild(pElem)
    skyImg.setAttribute('src',parsedData.current.condition.icon)
    humidity.innerHTML = parsedData.current.humidity
}
getData()