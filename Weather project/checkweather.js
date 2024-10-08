document.addEventListener(`DOMContentLoaded`, ()=>{



let check_weather_button=document.getElementById(`go_button`)

let city_name=document.getElementById(`city_name`)
let temp_city=document.getElementById(`temperature_city`)
let weather_city=document.getElementById(`weather_condition`)
let weatherdata=document.getElementById(`weather_data`)

let cityinputtext=document.getElementById(`city_input`)

let api_key=`9318b1040f828ca7d0d6c93d5150fd6f`


check_weather_button.addEventListener(`click`,async ()=>{
   const city=document.getElementById(`city_input`).value;
   console.log(city);

  


   
  try {
    await fetchWeatherData(city),
    displayWeatherData(weatherdata)

  } catch (error) {
    
    showError()
  }
    
    
    


let weather_of_city=document.getElementsByClassName(`city_name`)


async function fetchWeatherData(city){

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric  `

//   console.log(url);
  
    const response =await fetch(url)
     
    console.log(typeof response);
    console.log(response);

    const data=await response.json();
    console.log(data);
    // console.log();
    
    let tempofcity=data.main.temp
    let weather=data.weather[0].description;

    // const {name,main,weather}=data

    // city_name.classList.add('weather_data_bg')
  weatherdata.classList.add(`weather_data_bg`)

    city_name.textContent=data.name;
    temp_city.textContent= `Temperature-${tempofcity}`;
    weather_city.textContent=`Weather-${weather}`

    

} 

 
    
    
    // const url=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



function displayWeatherData(weatherdata){
 
    console.log("data");
    
    console.log(weatherdata);
    

}


function showError(){


}

})




check_weather_button.addEventListener(`click`, ()=>{

  if (city==""){
    alert(`enter city`)
    
  }

  else{
cityinputtext.value==""
  }
})



})