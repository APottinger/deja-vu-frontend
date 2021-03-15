document.querySelector('.form').addEventListener('submit', (e)=> {
    let long;
    let lat;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(location => {
            long = location.coords.longitude
            lat = location.coords.latitude
            
        
        const locationUrl = //'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&units=imperial&exclude=hourly,daily&appid=caa547c009cc2020ab222117a4ce878f'

        fetch(locationUrl) 
            .then(response =>
                response.json())
            .then(data => {
                let weather = data.current.weather[0].main
                let description = data.current.weather[0].description
                let temperature = data.current.temp

                let weatherHeader = document.getElementById("weather")

                weatherHeader.innerHTML += `
                    <ul class="weather-wrapper">
                        <li id="weather"> ${weather}</li>
                        <li id="des"> ${description}</li>
                        <li id="temp"> ${temperature}°</li>
                    <ul>
                `
                
            })
        })
    }
})
    
    const USER_URL = `http://127.0.0.1:3000/users`
//user would be able to sign in and make comments based on the weather for the day.
//sign in to render the form - render's the user's info on screen
//they are able to make comments (CRUD functionality)
    
    let userForm = document.querySelector('.form')
    userForm.addEventListener('submit', (e)=> {
    
        let username = document.getElementById('username').value
        let email = document.getElementById('email').value
        e.preventDefault()

     
        const configObj = {
            method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    Accept: 'application/json'
                },
            body: JSON.stringify(user = {
                username: username,
                email: email
            })
        }
  
        fetch(USER_URL, configObj)
   
        Comment.renderCommentForm()
    })

    

