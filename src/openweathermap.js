const fetch = require('node-fetch');  // Import node-fetch for Node.js

const apiKey = 'aef9a585a90abe36d5718af98a289834'; // Replace with your OpenWeatherMap API key
const city = 'London'; // Replace with the city of your choice
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeatherData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayWeatherData(data) {
  console.log(`Weather in ${data.name}`);
  console.log(`Temperature: ${data.main.temp}°C`);
  console.log(`Weather: ${data.weather[0].description}`);
}

// Call the function to fetch weather data
fetchWeatherData();

