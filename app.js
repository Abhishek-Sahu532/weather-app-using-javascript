
const api_key = `3265874a2c77ae4a04bb96236a642d2f`
const searchInput = document.querySelector('#searchInput')

const searchSubmit = document.querySelector('#submit')

let mainDiv = document.querySelector('.weatherDetailsMainDiv')
let loading  = document.querySelector('#loading')

searchSubmit.addEventListener('click',function(event){
    getWeather(searchInput.value);
    event.preventDefault();
})

const getWeather =async(city)=>{

    mainDiv.innerHTML =`<h3>Loading...<h3>`
     
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`

    const response = await fetch(url);
    const data = await response.json()
    // console.log(data)
    return showWeather(data)
}

const showWeather = (data)=>{
// console.log(data)
if(data=='404'){
    mainDiv.innerHTML ='<h2>City Not Found</h2>'
}
mainDiv.innerHTML =`  <div class="imageUpperSection">
<div class="weatherDetails">
<div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
</div>

  <div class="tempDetails">
    <h3 id="temp">${data.main.temp} ℃</h3>
    <h3 id="cloudDetail">${data.weather[0].main}</h3>
    <h3 id="location">${data.name}, ${data.sys.country}</h3>
  </div>
</div>

<div class="airIndex">
  <div class="airCard">
    <h3>Wind Speed</h3>
    <p class="cardDetails">${data.wind.speed} mph</p>
  </div>
  <div class="airCard">
    <h3>High Temp</h3>
    <p class="cardDetails">${data.main.temp_max} ℃</p>
  </div>
  <div class="airCard">
    <h3>Low Temp</h3>
    <p class="cardDetails">${data.main.temp_min} ℃</p>
  </div>


</div>


`

}


let clear = document.querySelector('#clear')

clear.addEventListener('click', ()=>{
    mainDiv.innerHTML =``
})