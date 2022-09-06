const axios = window.axios;

axios({
    method: 'get',
    url: 'https://api.openweathermap.org/geo/1.0/direct?q=Sydney,NSW,AU&limit=5&appid=449f7d9b8ec3fc824913b7bf6a6a6e39',
    responseType: 'json'
  })
    .then(function (response) {
    console.log(response.data)
      axios({
        url: 'https://api.openweathermap.org/data/2.5/weather?lat='+response.data[0].lat +'&lon='+response.data[0].lon +'&units=metric' +'&appid=449f7d9b8ec3fc824913b7bf6a6a6e39',
        responseType: 'json'
        })
        .then(function (response) {
        console.log(response.data)
        document.querySelector("#temp").innerHTML=response.data.main.temp;
        document.querySelector("#feels").innerHTML=response.data.main.feels_like;
        document.querySelector("#wind").innerHTML=response.data.wind.speed;
        document.querySelector("#humidity").innerHTML=response.data.main.humidity;

        })  
     
    });
















