window.addEventListener('load', ()=>{
    let long;
    let lat;
    let tempDescription = document.querySelector('.temperature-description');
    let tempDegree = document.querySelector('.temperature-degree');
    let locationZone = document.querySelector('.location-timezone');
    let icon = document.querySelector('.location p');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // key = 0946e7603c88d6ae060c3ccc452a01c5;
            // const proxy = 'https://cors-anywhere.herokuapp.com/';
            const proxy = 'https://cors-anywhere.herokuapp.com/http://ip-api.com/json';
            const api_call = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0946e7603c88d6ae060c3ccc452a01c5`;

            fetch(api_call)
                .then(response => {
                    return response.json();
                    
                })
                .then(data => {
                    console.log(data);
                    let {temp, feels_like} = data.main;
                    let {description} = data.weather[0];
                    let city = data.name;
                    let country = data.sys.country;
                    const location = city+' '+country;
                    tempDescription.textContent = description;
                    tempDegree.textContent = temp;
                    locationZone.textContent = location;
                    console.log(temp, feels_like, description, location);
                });

        });

        
    }


});