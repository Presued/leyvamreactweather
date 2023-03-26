

export default async function CityInput(city, countryCode = 'us') {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=4d5e7f9fda16c5d3c4c958fbda689671&units=imperial`)
    const data = await promise.json();
    let Weather = data
  return Weather
}