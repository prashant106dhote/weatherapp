const inputbox = document.querySelector(".input-box input");
const wather_text =document.querySelector(".wather-text h2"); 
const humenity_text =document.querySelector(".humenity-text  h2"); 
const discription = document.getElementById("discription");
const searchbtn = document.querySelector(".searchbtn");
const winde_text = document.querySelector(".winde-text h2")
const wather_img =document.querySelector(".wather-img")
const wather_body =document.querySelector(".container")
const location_not_found =document.querySelector(".location-not-found")
const h2 =document.querySelector(".weather-body h2")

h2.style.display = "none" 
//   async function chackwather




searchbtn.addEventListener("click",async ()=>{
    let city= inputbox.value;
    console.log(city);
     const key=`8cdaabcde4e4eb666642375244174654`
     const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ key}`
     const wather_data=await fetch(`${url}`).then(res=>res.json());
     console.log(wather_data);
     if(wather_data.cod=="404"){
      wather_img.src ="/assets/404.png";
      h2.style.display = "block" 

      // location_not_found.style.display="flex";
      // wather_body.style.display="flax";
      
      return;
     }
     
     wather_text.innerHTML =( wather_data.main.temp -273.15).toFixed(1)+`°C`;
   discription.innerHTML=wather_data.weather[0].description;

   humenity_text.innerHTML=wather_data.main.humidity +`%`;
   winde_text.innerHTML=wather_data.wind.speed+`km/H`;
   switch(wather_data.weather[0].main){
    case "Clear":
    wather_img.src ="/assets/clear.png";
    break;
    case "Clouds":
    wather_img.src ="/assets/cloud.png";
    break;
    case "Mist":
    wather_img.src ="/assets/mist.png";
    break;
    case "Rian":
    wather_img.src ="/assets/rain.png";
    break;
    case "Snow":
    wather_img.src ="/assets/snow(1).png";
    break;
   }

  });
