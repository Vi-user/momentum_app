const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
let city = document.querySelector('.city')
city.addEventListener('change', () => {
    localStorage.setItem('city', city.value)
    getWeather(city.value);
})


async function getWeather() {
    city.value = (localStorage.getItem('city')) ? localStorage.getItem('city') : 'Moscow' ;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log('data', data)
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = `${data.main.temp}°C`
    weatherDescription.textContent = data.weather[0].description
    windSpeed.textContent = `Wind speed: ${data.wind.speed} m/s`
    humidity.textContent = `humidity: ${data.main.humidity}`
}
getWeather()
