import { CurrentWeather } from "./CurrentWeather";


export default function GeoLocation() {
    const successCallback = (position) => {
        console.log(position);
        console.log(position.coords.latitude);
        console.log(position.coords.longitude); 
        CurrentWeather(position.coords.latitude, position.coords.longitude)          
      };
      
      const errorCallback = (error) => {
        console.log(error);
        alert("Please click Allow Geolocation")    
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}