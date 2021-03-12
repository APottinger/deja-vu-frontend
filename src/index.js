window.addEventListener('load', ()=> {
    let long;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(location => {
            long = location.coords.longitude
            lat = location.coords.latitude
            
        
        const locationUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&units=imperial&exclude=hourly,daily&appid=caa547c009cc2020ab222117a4ce878f'

        fetch(locationUrl) 
            .then(response =>
                response.json())
            .then(data => {
                let weather = data.current.weather[0].main
                let description = data.current.weather[0].description
                let temperature = data.current.temp

                let weatherHeader = document.getElementById("weather")
        //put the information to the dom
                weatherHeader.innerHTML += `
                    <ul class="weather-wrapper">
                        <li id="weather"> ${weather}</li>
                        <li id="des"> ${description}</li>
                        <li id="temp"> ${temperature}</li>
                    <ul>
                `
                
            })
        })
    }
})
