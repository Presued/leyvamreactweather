

export default async function FiveDayWeekWeather(latitude, longitude) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?&lat=${latitude}&lon=${longitude}&units=imperial&appid=4d5e7f9fda16c5d3c4c958fbda689671`)
    const data = await promise.json();
    console.log(data)    
}