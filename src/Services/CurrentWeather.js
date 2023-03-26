
async function CurrentWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=4d5e7f9fda16c5d3c4c958fbda689671')

    const data = await response.json()
    console.log(data);
}



export {CurrentWeather}