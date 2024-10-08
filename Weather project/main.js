// const city_weather_check=document.getElementById("city_name")


// // console.log(city_weather_check.value);
// // console.log("city");

//

//   console.log(weather_to_check);
  
// })


const express = require('express');
const { log } = require('node:console');
const https = require('node:https');
const app = express()
const bodyparser=require("body-parser")
const port = 3000

app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",(req,res)=>{

  res.sendFile(__dirname+"/index.html")
  
  // console.log(weather_to_check);
  
})

app.post("/",function(req,res){

var country= req.body.city_name
var server_id="801af628051f1011c1319e50e8a96fde"
// 801af628051f1011c1319e50e8a96fde
https.get("https://api.openweathermap.org/data/2.5/weather?q="+ country +"&appid="+ server_id+"&units=metric",function(responce){
    console.log(responce.statusCode); 
    responce.on(`data`,function(data){
        // console.log(data);
         var weather_data=(JSON.parse(data));
         var temp=weather_data.main.temp
        //  var icon=weather_data.weather[0].icon
        // 
         console.log(country+"---"+temp);
        //  res.write()
        //  res.write()
         res.send("The temperature in" +"___"+`${country}`+"___"+"is___"+`${temp}`+"C")
  
})

})

})

// app.get('/weather', (req, res) => {


// var country= weather_to_check
// var server_id="801af628051f1011c1319e50e8a96fde"
// // 801af628051f1011c1319e50e8a96fde
// https.get("https://api.openweathermap.org/data/2.5/weather?q="+ country +"&appid="+ server_id+"&units=metric",function(responce){
//     console.log(responce.statusCode);
//     document.querySelector(".find_weather").addEventListener("click",function(){
//   const weather_to_check=city_weather_check.value    
//     responce.on(`data`,function(data){
//         // console.log(data);
//          var weather_data=(JSON.parse(data));
//          var temp=weather_data.main.temp
//         //  var icon=weather_data.weather[0].icon
//         // 
//          console.log(temp);
//         //  res.write()
//         //  res.write()
//          res.send("The temperature in paris is--"+`${temp}`+"^C")

         
          
        
//     })
//     })
//     //  var weather_img="https://openweathermap.org/img/wn/02d@2x.png"
//     //  res.send("<img src="+weather_img+">")
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})